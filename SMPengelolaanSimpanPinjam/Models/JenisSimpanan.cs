﻿using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class JenisSimpanan
    {
        [Key]
        public int IdJenisSimpanan { get; set; }
        public string NamaSimpanan { get; set; }
        public double BesarSimpanan { get; set; }
        public string UserEntry { get; set; }
        public DateTime TglEntry { get; set; }

    }
}
