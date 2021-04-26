using Microsoft.EntityFrameworkCore.Migrations;

namespace day12Assignment.Migrations
{
    public partial class seeReport : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp4 = @"Create PROCEDURE seeCustomerAndProduct
            as
               begin
                    select c.CustomerID,c.CustomerName,t.toyName,t.toyPrice from 
                    Customers c join Toys t on c.toyId = t.toyId
                        end
                            ";

            migrationBuilder.Sql(sp4);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
