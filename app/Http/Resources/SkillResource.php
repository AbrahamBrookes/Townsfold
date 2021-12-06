<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SkillResource extends JsonResource
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
            'person_id' => $this->person_id,
            'name' => $this->skill_type->name,
            'description' => $this->skill_type->description,
            'level' => $this->level,
            'skill_type_id' => $this->skill_type_id,
            'skill_type' => new SkillTypeResource($this->skill_type),
        ];
    }
}
