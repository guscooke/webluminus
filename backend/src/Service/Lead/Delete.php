<?php

declare(strict_types=1);

namespace App\Service\Lead;

final class Delete extends Base
{
    public function delete(int $leadId): void
    {
        $this->getLeadFromDb($leadId);        
        $this->leadRepository->delete($leadId);        
    }
}
