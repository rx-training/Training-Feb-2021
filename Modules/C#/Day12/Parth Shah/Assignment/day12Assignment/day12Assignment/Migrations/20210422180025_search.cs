using Microsoft.EntityFrameworkCore.Migrations;

namespace day12Assignment.Migrations
{
    public partial class search : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp5 = @"Create PROCEDURE searchProduct
            @toyName nvarchar(50)
            as
            begin
            select * from toys where toyName = @toyName
            end";
            migrationBuilder.Sql(sp5);


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
