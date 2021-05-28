using Microsoft.EntityFrameworkCore.Migrations;

namespace day12Assignment.Migrations
{
    public partial class customerList : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp5 = @"Create PROCEDURE GettingCustomers
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from Customers
                END";

            migrationBuilder.Sql(sp5);


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
