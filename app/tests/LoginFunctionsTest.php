<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

require_once "db/functions/login-functions.php";

final class LoginFunctionsTest extends TestCase
{
    /** @test **/
    public function emptyInputLoginWithNonEmpyInputTest(): void
    {   
        $name = "testname";
        $password = "testpassword";
        $this->assertEquals(false,emptyInputLogin($name, $password));
    }

    /** @test **/
    public function emptyInputLoginWithEmptyUsernameTest(): void
    {   
        $name = "";
        $password = "testpassword";
        $this->assertEquals(true,emptyInputLogin($name, $password));
    }

     /** @test **/
     public function emptyInputLoginWithEmptyPasswordTest(): void
     {   
         $name = "testusername";
         $password = "";
         $this->assertEquals(true,emptyInputLogin($name, $password));
     }

      /** @test **/
      public function emptyInputLoginWithEmptyUsernameAndPasswordTest(): void
      {   
          $name = "";
          $password = "";
          $this->assertEquals(true,emptyInputLogin($name, $password));
      }

}