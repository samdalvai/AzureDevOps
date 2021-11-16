<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

require_once "db/functions/booking-functions.php";

final class BookingFunctionsTest extends TestCase
{
    /** @test **/
    public function emptyInputTest(): void
    {   
        $input = "";
        $this->assertEquals(true,emptyInput($input));
    }

    /** @test **/
    public function emptyInputWithNonEmptyInputTest(): void
    {   
        $input = "testinput";
        $this->assertEquals(false,emptyInput($input));
    }

    /** @test **/
    public function validateNameWithValidNameTest(): void
    {   
        $input = "Name Surname";
        $this->assertEquals(true,validateName($input));
    }

    /** @test **/
    public function validateNameWithInvalidNameTest(): void
    {   
        $input = "MyName0Hello";
        $this->assertEquals(false,validateName($input));
    }

    /** @test **/
    public function validateValidCreditCardNumTest(): void
    {   
        $input = "1234-1234-1234-1234";
        $this->assertEquals(true,validateCreditCardNum($input));
    }

    /** @test **/
    public function validateInvalidCreditCardNumTest(): void
    {   
        $input = "123-1234-1234-1234";
        $this->assertEquals(false,validateCreditCardNum($input));
    }

    /** @test **/
    public function validateValidCVVTest(): void
    {   
        $input = "123";
        $this->assertEquals(true,validateCVV($input));
    }

    /** @test **/
    public function validateInvalidCVVTest(): void
    {   
        $input = "1234";
        $this->assertEquals(false,validateCVV($input));
    }

    /** @test **/
    public function validateValidMonthTest(): void
    {   
        $input = "12";
        $this->assertEquals(true,validateMonth($input));
    }

    /** @test **/
    public function validateInvalidMonthTest(): void
    {   
        $input = "MM";
        $this->assertEquals(false,validateMonth($input));
    }

    /** @test **/
    public function validateValidYearTest(): void
    {   
        $input = "21";
        $this->assertEquals(true,validateYear($input));
    }

    /** @test **/
    public function validateInvalidYearTest(): void
    {   
        $input = "YY";
        $this->assertEquals(false,validateYear($input));
    }

    /** @test **/
    public function validateValidExpirationDateTest(): void
    {   
        $year = date('y') + 10000;
        $month = date('m');
        $this->assertEquals(true,validateExpirationDate($year, $month));
    }

    /** @test **/
    public function validateInvalidExpirationDateTest(): void
    {   
        $year = date('y') - 10000;
        $month = date('m');
        $this->assertEquals(false,validateExpirationDate($year, $month));
    }

}

?>