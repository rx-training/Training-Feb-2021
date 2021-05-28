using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_Hotstar;
using Project_Hotstar.Models;


namespace Project_Hotstar.Controllers
{
    [Authorize]
    [Route("api/showsandmovies/[controller]")]
    [ApiController]
    public class ShowsAndMoviesController : ControllerBase
    {
        private readonly HotstarDBContext _context;

        public ShowsAndMoviesController(HotstarDBContext context)
        {
            _context = context;
        }

        // GET: api/ShowsAndMovies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShowsAndMovie>>> GetShowsAndMovies()
        {
            return await _context.ShowsAndMovies.ToListAsync();
        }

        // GET: api/ShowsAndMovies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ShowsAndMovie>> GetShowsAndMovie(int id)
        {
            var showsAndMovie = await _context.ShowsAndMovies.FindAsync(id);

            if (showsAndMovie == null)
            {
                return NotFound();
            }

            return showsAndMovie;
        }

        // PUT: api/ShowsAndMovies/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShowsAndMovie(int id, ShowsAndMovie showsAndMovie)
        {
            if (id != showsAndMovie.MovieId)
            {
                return BadRequest();
            }

            _context.Entry(showsAndMovie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShowsAndMovieExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ShowsAndMovies
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ShowsAndMovie>> PostShowsAndMovie(ShowsAndMovie showsAndMovie)
        {
            _context.ShowsAndMovies.Add(showsAndMovie);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ShowsAndMovieExists(showsAndMovie.MovieId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetShowsAndMovie", new { id = showsAndMovie.MovieId }, showsAndMovie);
        }

        // DELETE: api/ShowsAndMovies/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ShowsAndMovie>> DeleteShowsAndMovie(int id)
        {
            var showsAndMovie = await _context.ShowsAndMovies.FindAsync(id);
            if (showsAndMovie == null)
            {
                return NotFound();
            }

            _context.ShowsAndMovies.Remove(showsAndMovie);
            await _context.SaveChangesAsync();

            return showsAndMovie;
        }

        private bool ShowsAndMovieExists(int id)
        {
            return _context.ShowsAndMovies.Any(e => e.MovieId == id);
        }
    }
}

