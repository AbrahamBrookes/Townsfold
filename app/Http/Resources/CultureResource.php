<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CultureResource extends JsonResource
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
            'nation_name' => $this->nation->name,
            'language' => $this->language,
            'towns' => new TownCollection($this->towns),
        ];
    }
}
