using Microsoft.EntityFrameworkCore.Migrations;

namespace Polica.Migrations
{
    public partial class cetvrta : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Knjiga_Police_PolicaID",
                table: "Knjiga");

            migrationBuilder.RenameColumn(
                name: "PolicaID",
                table: "Knjiga",
                newName: "PolicaaID");

            migrationBuilder.RenameIndex(
                name: "IX_Knjiga_PolicaID",
                table: "Knjiga",
                newName: "IX_Knjiga_PolicaaID");

            migrationBuilder.AddForeignKey(
                name: "FK_Knjiga_Police_PolicaaID",
                table: "Knjiga",
                column: "PolicaaID",
                principalTable: "Police",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Knjiga_Police_PolicaaID",
                table: "Knjiga");

            migrationBuilder.RenameColumn(
                name: "PolicaaID",
                table: "Knjiga",
                newName: "PolicaID");

            migrationBuilder.RenameIndex(
                name: "IX_Knjiga_PolicaaID",
                table: "Knjiga",
                newName: "IX_Knjiga_PolicaID");

            migrationBuilder.AddForeignKey(
                name: "FK_Knjiga_Police_PolicaID",
                table: "Knjiga",
                column: "PolicaID",
                principalTable: "Police",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
