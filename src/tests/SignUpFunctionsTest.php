<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

require_once "db/functions/signup-functions.php";

final class SignUpFunctionsTest extends TestCase
{
    /** @test **/
    public function emptyInputSignupWithNoEmpyInputTest(): void
    {   
        $name = "testname";
        $email = "testemail";
        $username = "testusername";
        $pwd = "testpassword";
        $pwdrepeat = "testpassword";
        $this->assertEquals(false,emptyInputSignup($name,$email, $username,$pwd,$pwdrepeat));
    }

    /** 
     * @test
     * @dataProvider providerInputData
     **/
    public function emptyInputSignupWithEmpyInputTest($name,$email, $username,$pwd,$pwdrepeat): void
    {   
        $this->assertEquals(true,emptyInputSignup($name,$email, $username,$pwd,$pwdrepeat));
    }

    public function providerInputData() {
        return array(
            array("","testemail","testusername","testpassword","testpassword"),
            array("testname","","testusername","testpassword","testpassword"),
            array("testname","testemail","","testpassword","testpassword"),
            array("testname","testemail","testusername","","testpassword"),
            array("testname","testemail","testusername","testpassword","")
        );
    }
    
    /** @test **/
    public function invalidEmailWithValidInputTest(): void
    {   
        $email = "testemail@testemail.com";
        $this->assertEquals(false,invalidEmail($email));
    }
    
    /** @test **/
    public function invalidEmailWithInvalidInputTest(): void
    {   
        $email = "testemail@testemail@test.com";
        $this->assertEquals(true,invalidEmail($email));
    }

    /** @test **/
    public function pwdMatchWithMatchingPasswordTest(): void
    {   
        $pwd = "testpassword";
        $pwdrepeat = "testpassword";
        $this->assertEquals(false,pwdMatch($pwd,$pwdrepeat));
    }

    /** @test **/
    public function pwdMatchWithNonMatchingPasswordTest(): void
    {   
        $pwd = "testpassword1";
        $pwdrepeat = "testpassword2";
        $this->assertEquals(true,pwdMatch($pwd,$pwdrepeat));
    }


}

?>