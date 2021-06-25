using Microsoft.EntityFrameworkCore.Migrations;

namespace day12Assignment.Migrations
{
    public partial class insertOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp7 = @"Create PROCEDURE insertingOrder
                
                @TotalPrice int,
                @CustomerID int
                AS
                BEGIN
                 SET NOCOUNT ON;
                   insert into Orders(totalPrice,CustomerID) values (@TotalPrice,@CustomerID)
                END";

            migrationBuilder.Sql(sp7);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
