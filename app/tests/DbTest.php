<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

final class DbTest extends TestCase
{
    /** @test **/
    public function mySimpleTest(): void
    {
        $this->assertEquals('test','test');
    }


}
