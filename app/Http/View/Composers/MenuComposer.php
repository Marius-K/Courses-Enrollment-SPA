<?php

namespace App\Http\View\Composers;

use Illuminate\View\View;
use App\Discipline;
use App\Institution;

class SidebarComposer
{
    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('menuDisciplines', Discipline::withCount('courses')->whereHas('courses')->pluck('name', 'id'));
        $view->with('menuInstitutions', Institution::withCount('courses')->whereHas('courses')->pluck('name', 'id'));
    }
}