<?php

namespace App\Controllers;

class Bodies extends BaseController
{
    public function index()
    {
        $data['title']   = 'EDDB - Bodies';
        return view('common/header', $data)
            . view('bodies')
            . view('common/footer');
    }
}
