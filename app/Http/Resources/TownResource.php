<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TownResource extends JsonResource
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
            'name' => $this->name,
            'culture_id' => $this->culture_id,
            'culture' => $this->culture,
            'families' => FamilyResource::collection($this->families),
            'buildings' => BuildingResource::collection($this->buildings),
        ];
    }
}
