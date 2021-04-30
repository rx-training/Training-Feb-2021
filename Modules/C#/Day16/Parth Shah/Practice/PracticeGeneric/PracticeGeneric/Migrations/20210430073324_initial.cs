using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PracticeGeneric.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EMPLOYEE_ID = table.Column<int>(type: "int", nullable: false),
                    FirstName = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    LastName = table.Column<string>(type: "varchar(25)", unicode: false, maxLength: 25, nullable: true),
                    Salary = table.Column<int>(type: "int", nullable: true),
                    joiningDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    Department = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    ManagerID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EMPLOYEE_ID);
                });

            migrationBuilder.CreateTable(
                name: "Incentives",
                columns: table => new
                {
                    IncentiveID = table.Column<int>(type: "int", nullable: false),
                    EMPLOYEE_ID = table.Column<int>(type: "int", nullable: true),
                    IncentiveDate = table.Column<DateTime>(type: "date", nullable: true),
                    IncentiveAmount = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incentives", x => x.IncentiveID);
                    table.ForeignKey(
                        name: "FK__Incentive__EMPLO__3D5E1FD2",
                        column: x => x.EMPLOYEE_ID,
                        principalTable: "Employees",
                        principalColumn: "EMPLOYEE_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Incentives_EMPLOYEE_ID",
                table: "Incentives",
                column: "EMPLOYEE_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Incentives");

            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
