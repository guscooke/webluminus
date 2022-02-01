<?php

declare(strict_types=1);

namespace App\Controller\Lead;

use App\Controller\BaseController;
use App\Exception\Lead;
use App\Service\Lead\Create;
use App\Service\Lead\GetUpload;
use App\Service\Lead\Upload;
use App\Service\Lead\Delete;
use App\Service\Lead\Find;
use App\Service\Lead\Update;
use App\Service\Lead\UpdateStatus;

abstract class Base extends BaseController
{
    protected function getFindLeadService(): Find
    {
        return $this->container->get('find_lead_service');
    }

    protected function getCreateLeadService(): Create
    {
        return $this->container->get('create_lead_service');
    }
	
	protected function getGetUploadLeadService(): GetUpload
    {
        return $this->container->get('getupload_lead_service');
    }
	
	protected function getUploadLeadService(): Upload
    {
        return $this->container->get('upload_lead_service');
    }

    protected function getUpdateLeadService(): Update
    {
        return $this->container->get('update_lead_service');
    }
	
	protected function getUpdateStatusLeadService()
    {
        return $this->container->get('update_leadstatus_service');
    }

    protected function getDeleteLeadService(): Delete
    {
        return $this->container->get('delete_lead_service');
    }

    protected function checkLeadPermissions(int $userId, int $userIdLogged): void
    {
        /*if ($userId !== $userIdLogged) {
            throw new Admin('Admin permission failed.', 400);
        }*/
    }

    protected function getAndValidateLeadId(array $input): int
    {
        if (isset($input['decoded']) && isset($input['decoded']->sub)) {
            return (int) $input['decoded']->sub;
        }

        //throw new Lead('Invalid afiliado. Permission failed.', 400);
    }
}
