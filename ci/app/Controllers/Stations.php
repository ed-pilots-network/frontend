<?php

namespace App\Controllers;

class Stations extends BaseController
{
    public function index()
    {
        $data['title']   = 'EDDB - Stations';
        return view('common/header', $data)
            . view('stations')
            . view('common/footer');
    }
}
