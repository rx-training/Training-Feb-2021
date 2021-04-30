using Microsoft.EntityFrameworkCore.Migrations;

namespace day17Assignment.Migrations
{
    public partial class update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase(
                collation: "SQL_Latin1_General_CP1_CI_AS");

            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    Dept_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Dept_Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PKDeptID", x => x.Dept_ID);
                });

            migrationBuilder.CreateTable(
                name: "Drugs",
                columns: table => new
                {
                    Drug_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Drug_Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    DrugTime = table.Column<string>(type: "varchar(80)", unicode: false, maxLength: 80, nullable: false),
                    DrugPrice = table.Column<decimal>(type: "money", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Drugs", x => x.Drug_ID);
                });

            migrationBuilder.CreateTable(
                name: "Doctors",
                columns: table => new
                {
                    Dr_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Dr_Name = table.Column<string>(type: "varchar(60)", unicode: false, maxLength: 60, nullable: false),
                    Dept_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false),
                    Gender = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    Designation = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PKDoctorID", x => x.Dr_ID);
                    table.ForeignKey(
                        name: "FKDeptID",
                        column: x => x.Dept_ID,
                        principalTable: "Departments",
                        principalColumn: "Dept_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Patients",
                columns: table => new
                {
                    P_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    P_Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Dept_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false),
                    Drug_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false),
                    Dr_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PKPID", x => x.P_ID);
                    table.ForeignKey(
                        name: "FKDepartmentID",
                        column: x => x.Dept_ID,
                        principalTable: "Departments",
                        principalColumn: "Dept_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FKDrID",
                        column: x => x.Dr_ID,
                        principalTable: "Doctors",
                        principalColumn: "Dr_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FKDrugID",
                        column: x => x.Drug_ID,
                        principalTable: "Drugs",
                        principalColumn: "Drug_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "HealthCareAssistants",
                columns: table => new
                {
                    H_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    H_Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Dept_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false),
                    P_ID = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PKHID", x => x.H_ID);
                    table.ForeignKey(
                        name: "FKDepartmentsID",
                        column: x => x.Dept_ID,
                        principalTable: "Departments",
                        principalColumn: "Dept_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FKPatientID",
                        column: x => x.P_ID,
                        principalTable: "Patients",
                        principalColumn: "P_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Doctors_Dept_ID",
                table: "Doctors",
                column: "Dept_ID");

            migrationBuilder.CreateIndex(
                name: "IX_HealthCareAssistants_Dept_ID",
                table: "HealthCareAssistants",
                column: "Dept_ID");

            migrationBuilder.CreateIndex(
                name: "IX_HealthCareAssistants_P_ID",
                table: "HealthCareAssistants",
                column: "P_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_Dept_ID",
                table: "Patients",
                column: "Dept_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_Dr_ID",
                table: "Patients",
                column: "Dr_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_Drug_ID",
                table: "Patients",
                column: "Drug_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HealthCareAssistants");

            migrationBuilder.DropTable(
                name: "Patients");

            migrationBuilder.DropTable(
                name: "Doctors");

            migrationBuilder.DropTable(
                name: "Drugs");

            migrationBuilder.DropTable(
                name: "Departments");

            migrationBuilder.AlterDatabase(
                oldCollation: "SQL_Latin1_General_CP1_CI_AS");
        }
    }
}
