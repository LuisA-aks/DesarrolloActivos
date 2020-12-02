using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PANI.Models
{
    public class Prueba
    {
        public int Asignado_a { get; set; }//1
        public int NACTIVO { get; set; }//2 pasar a string 
        public string SERIE { get; set; }//3
        public string Garantia { get; set; }//4 
        public int MARCA { get; set; }//5 dell asus
        public int MODELO { get; set; }//6 optiplex
        public int Proveedor { get; set; }//7
        public string ORDEN_DE_COMPRA { get; set; }//8 licitacion
        public int Tipo_Activo { get; set; }//9 familia
        public string COSTO { get; set; }//10
        public string Aseguramiento { get; set; }//11
        public string DESCRIPCION { get; set; }//12
        public int Incluido_poliza { get; set; }//13
                                                //agregué esto

        public string Adiquisicion { get; set; }//14

    }
}