using Microsoft.EntityFrameworkCore.Migrations;

namespace day12Assignment.Migrations
{
    public partial class searchRecord : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "vToys",
                columns: table => new
                {
                    CustomerID = table.Column<int>(type: "int", nullable: false),
                    CustomerName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    toyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    toyPrice = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "vToys");
        }
    }
}
