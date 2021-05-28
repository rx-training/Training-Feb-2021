using Microsoft.EntityFrameworkCore.Migrations;

namespace day12Assignment.Migrations
{
    public partial class showToys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"Create PROCEDURE GettingToys
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from toys
                END";

            migrationBuilder.Sql(sp);


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
