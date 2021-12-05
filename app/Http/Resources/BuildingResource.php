<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BuildingResource extends JsonResource
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
            'town_id' => $this->town_id,
            'name' => $this->name,
            'building_type_id' => $this->building_type_id,
            'building_type' => new BuildingTypeResource($this->buildingType),
            'jobs' => JobResource::collection($this->jobs),
        ];
    }
}
