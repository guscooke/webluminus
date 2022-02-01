<?php

declare(strict_types=1);

namespace App\Service\Admin;

use App\Exception\Admin;
use Firebase\JWT\JWT;

final class Login extends Base
{
    public function login(array $input): array
    {
        $data = json_decode((string) json_encode($input), false);
        if (! isset($data->email)) {
            throw new Admin('The field "email" is required.', 400);
        }
        if (! isset($data->password)) {
            throw new Admin('The field "password" is required.', 400);
        }
        $password = hash('sha512', $data->password);
        $user = $this->adminRepository->loginAdmin($data->email, $password);
        $token = [
            'sub' => $user->getId(),
            'email' => $user->getEmail(),
            'nome' => $user->getName(),            
            'afiliado_id' => $user->getAfiliadoId(),
            'iat' => time(),
            'exp' => time() + (7 * 24 * 60 * 60),
        ];
		
		$jwt_array['JWT'] = JWT::encode($token, $_SERVER['SECRET_KEY']);
		$jwt_array['NOME'] = $user->getName();
		$jwt_array['EMAIL'] = $user->getEmail();
		$jwt_array['AFILIADO'] = $user->getAfiliadoId();
		

        return $jwt_array;
    }
}
