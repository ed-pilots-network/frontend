<?php

namespace App\Controllers;

class Systems extends BaseController
{
    public function index()
    {
        $data['title']   = 'EDDB - Systems';
        return view('common/header', $data)
            . view('systems')
            . view('common/footer');
    }
}
