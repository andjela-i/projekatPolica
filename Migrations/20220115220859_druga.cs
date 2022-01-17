using Microsoft.EntityFrameworkCore.Migrations;

namespace Polica.Migrations
{
    public partial class druga : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BrojKnjiga",
                table: "Police",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Ime",
                table: "Police",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Kapacitet",
                table: "Police",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BrojKnjiga",
                table: "Police");

            migrationBuilder.DropColumn(
                name: "Ime",
                table: "Police");

            migrationBuilder.DropColumn(
                name: "Kapacitet",
                table: "Police");
        }
    }
}
