using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBigBasket.Migrations
{
    public partial class checkUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BigBasketUserId",
                table: "Customer",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Customer_BigBasketUserId",
                table: "Customer",
                column: "BigBasketUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Customer_AspNetUsers_BigBasketUserId",
                table: "Customer",
                column: "BigBasketUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customer_AspNetUsers_BigBasketUserId",
                table: "Customer");

            migrationBuilder.DropIndex(
                name: "IX_Customer_BigBasketUserId",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "BigBasketUserId",
                table: "Customer");
        }
    }
}
