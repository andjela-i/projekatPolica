using Microsoft.EntityFrameworkCore.Migrations;

namespace Polica.Migrations
{
    public partial class treca : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BrojKnjiga",
                table: "Police");

            migrationBuilder.DropColumn(
                name: "Kapacitet",
                table: "Police");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BrojKnjiga",
                table: "Police",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Kapacitet",
                table: "Police",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
