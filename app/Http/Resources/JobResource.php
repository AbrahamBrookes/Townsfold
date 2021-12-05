<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'building_id' => $this->building_id,
            'building' => new BuildingResource($this->whenLoaded('building')),
            'job_type_id' => $this->job_type_id,
            'job_type' => new JobTypeResource($this->whenLoaded('job_type')),
            'employee_id' => $this->employee_id,
            'employee' => new PersonResource($this->whenLoaded('employee')),
            'title' => $this->title,
            'description' => $this->description,
            'salary' => $this->salary,
        ];
    }
}
