<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;

class LoginCotroller extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
                 'email'=>'required|email',
                 'password'=>'required'
        ]);
        if(!Auth::attempt($credentials))
       {
            
           throw ValidationException::withMessages([
            'email'=>[
                __('auth.failed')
            ]
            ]);
          
        }           
        return $request->user();
    }
}
