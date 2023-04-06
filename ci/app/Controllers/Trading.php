<?php

namespace App\Controllers;

class Trading extends BaseController
{
    public function index()
    {
        $data['title']   = 'EDDB - Trading';
        return view('common/header', $data)
            . view('trading')
            . view('common/footer');
    }
}
