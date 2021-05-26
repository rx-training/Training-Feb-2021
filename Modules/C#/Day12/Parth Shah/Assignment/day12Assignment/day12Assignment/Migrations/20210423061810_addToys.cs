using Microsoft.EntityFrameworkCore.Migrations;

namespace day12Assignment.Migrations
{
    public partial class addToys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp8 = @"Create PROCEDURE insertingToys
                
                @ToyName nvarchar(50),
                @toyPrice int,
                @PlantId int
                AS
                BEGIN
                 SET NOCOUNT ON;
                   insert into Toys(toyName,toyPrice,PlantId) values (@ToyName,@toyPrice,@PlantId)
                END";

            migrationBuilder.Sql(sp8);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
