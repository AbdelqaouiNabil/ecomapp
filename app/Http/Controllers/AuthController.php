<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{
       //--------------- Function Login ----------------\\

       public function Login(Request $request)
       {
           $credentials = $request->validate([
               'email' => 'required|email|exists:users,email',
               'password' => 'required',
           ]);
      
           if (!Auth::attempt($credentials)) {
               
                   return response([
                       'message' => 'provided email or password Incorrect',
                   ],422);
               }

               $user = Auth::user();
               $token = $user->createToken("main")->plainTextToken;
               

               return response(compact('user','token'));
   
           
   
           
       }
}
