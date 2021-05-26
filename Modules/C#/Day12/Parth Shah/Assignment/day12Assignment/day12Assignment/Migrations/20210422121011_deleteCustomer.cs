using Microsoft.EntityFrameworkCore.Migrations;

namespace day12Assignment.Migrations
{
    public partial class deleteCustomer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp3 = @"Create PROCEDURE DeleteCustomer
            
            @CustomerName = nvarchar(50)
             
            AS
                BEGIN
            SET NOCOUNT ON ;
            DELETE FROM Customers WHERE CustomerName = @CustomerName
                END";


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
