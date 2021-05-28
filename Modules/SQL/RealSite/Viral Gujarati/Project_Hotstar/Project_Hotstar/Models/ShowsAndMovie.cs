using System;
using System.Collections.Generic;

#nullable disable

namespace Project_Hotstar.Models
{
    public partial class ShowsAndMovie
    {
        public int MovieId { get; set; }
        public string MovieTitle { get; set; }
        public string MovieLanguage { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Rating { get; set; }

        public virtual ICollection<ShowsAndMovie> ShowsAndMovies { get; set; }
    }
}
