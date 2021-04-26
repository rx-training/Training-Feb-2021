using Microsoft.EntityFrameworkCore.Migrations;

namespace ToyManufacturingCompany.Migrations
{
    public partial class AddPlantName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PlantName",
                table: "Toys",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlantName",
                table: "Toys");
        }
    }
}
