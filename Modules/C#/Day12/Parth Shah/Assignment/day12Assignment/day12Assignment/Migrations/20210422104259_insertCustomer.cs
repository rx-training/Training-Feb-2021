using Microsoft.EntityFrameworkCore.Migrations;

namespace day12Assignment.Migrations
{
    public partial class insertCustomer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp2 = @"Create PROCEDURE insertingCustomer
                
                @customerName nvarchar(50),
                @toyId int
                AS
                BEGIN
                 SET NOCOUNT ON;
                   insert into Customers(CustomerName,toyId) values (@customerName,@toyId)
                END";

            migrationBuilder.Sql(sp2);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
