# Chart Dashboard

Knowledge Relay Take-home Assessment

## Project Goals

- Display at least three different charts
- Responsive and Works well in Desktop and Mobile
- Clean and User-Friendly Design

## Tools & Frameworks

- Front End : React
- Chart: chart.js, react-chartjs-2
- Responsiveness: TailwindCSS

## Chart Display

### Data source for charts and display that data source in at least three different charts.

Soccer Statistics for data source, something like this format.

    [
        {
    	    team,
    	    color,
    	    data:
    	    [
    		    {
    			    season,
    			    wins,
    			    losses,
    			    draws,
    			    points,
    			    goalsScored,
    			    goalsConceded,
    			    goalsDifference,
    			    leaguePosition
    		    }, ...
    	    ]
    	}, ...
    ]

For 4 different teams' performance over 3 seasons from "2015-2016" to "2017-2018".

### Second, display data in different charts.

- [Bar Chart](https://www.chartjs.org/docs/master/charts/bar.html) to display numbers of wins, losses, and draws for each team across seasons.
- [Line Chart](https://www.chartjs.org/docs/master/charts/line.html) to track the progression of points for teams over seasons.
- [Doughnut or Pie Chart](https://www.chartjs.org/docs/master/charts/doughnut.html#doughnut) to display the distribution of goals scored or conceded by each team for overall seasons.

### Third, interactive data by clicking some dataset in each chart.

- Shared Data using React Context API.
- Regenerate Data from teams and seasons.
