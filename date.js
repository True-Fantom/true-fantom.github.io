(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYyLjMyMjg5LC0zNy4zMjI2MSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE2Mi4zMjI4OSwxNTAuMDAwMDFjMCwtNjIuMjMwMDEgNTAuNDQ3NCwtMTEyLjY3NzQgMTEyLjY3NzQsLTExMi42Nzc0YzYyLjIzMDAxLDAgMTEyLjY3NzQsNTAuNDQ3NCAxMTIuNjc3NCwxMTIuNjc3NGMwLDYyLjIzMDAxIC01MC40NDczOSwxMTIuNjc3NCAtMTEyLjY3NzQsMTEyLjY3NzRjLTYyLjIzMDAxLDAgLTExMi42Nzc0LC01MC40NDczOSAtMTEyLjY3NzQsLTExMi42Nzc0eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjYzkxMzkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTE5Ny41NTUxOCwxNTAuMDAwMDFjMCwtNDIuNzcxNTkgMzQuNjczMjQsLTc3LjQ0NDgxIDc3LjQ0NDgzLC03Ny40NDQ4MWM0Mi43NzE1NywwIDc3LjQ0NDgxLDM0LjY3MzI0IDc3LjQ0NDgxLDc3LjQ0NDgxYzAsNDIuNzcxNTkgLTM0LjY3MzIzLDc3LjQ0NDgyIC03Ny40NDQ4MSw3Ny40NDQ4M2MtNDIuNzcxNTksMCAtNzcuNDQ0ODIsLTM0LjY3MzIzIC03Ny40NDQ4MiwtNzcuNDQ0ODJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIwIi8+PHBhdGggZD0iTTI4Ni45NjcwNSwxNjEuODMzNDRjLTYuNTM4MzYsNi42MDgxIC0xNy4xOTI2NSw2LjY2NzExIC0yMy44MDQyMSwwLjEyOTdjLTYuNjA4MSwtNi41MzgzNSAtNi42NjM2NCwtMTcuMTkzNjEgLTAuMTI1MjgsLTIzLjgwMTdjNi41MzgzNiwtNi42MDgxIDM2LjE0MDczLC0xMi45MjY0MyAzNi40MzMzNiwtMTIuNjI3NjhjMC4yOTI2NCwwLjI5ODc2IC01Ljk2NTUxLDI5LjY5MTU4IC0xMi41MDM4NywzNi4yOTk2OHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MTE6MTEyLjY3NzM5LS0+';
  const miniTimestamp = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOTQuODg5NjMiIGhlaWdodD0iMTk0Ljg4OTY0IiB2aWV3Qm94PSIwLDAsMTk0Ljg4OTYzLDE5NC44ODk2NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ny41NTUyNywtNTIuNTU0OTkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xOTcuNTU1MjcsMTQ5Ljk5OThjMCwtNDIuNzcxNTkgMzQuNjczMjMsLTc3LjQ0NDgxIDc3LjQ0NDgyLC03Ny40NDQ4MWM0Mi43NzE1NywwIDc3LjQ0NDgxLDM0LjY3MzIzIDc3LjQ0NDgxLDc3LjQ0NDgxYzAsNDIuNzcxNTkgLTM0LjY3MzIzLDc3LjQ0NDgyIC03Ny40NDQ4MSw3Ny40NDQ4M2MtNDIuNzcxNTksMCAtNzcuNDQ0ODIsLTM0LjY3MzIyIC03Ny40NDQ4MiwtNzcuNDQ0ODF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYTM3NDJlIiBzdHJva2Utd2lkdGg9IjQwIi8+PHBhdGggZD0iTTE5Ny41NTUyNywxNDkuOTk5OGMwLC00Mi43NzE1OSAzNC42NzMyMywtNzcuNDQ0ODEgNzcuNDQ0ODIsLTc3LjQ0NDgxYzQyLjc3MTU3LDAgNzcuNDQ0ODEsMzQuNjczMjMgNzcuNDQ0ODEsNzcuNDQ0ODFjMCw0Mi43NzE1OSAtMzQuNjczMjMsNzcuNDQ0ODIgLTc3LjQ0NDgxLDc3LjQ0NDgzYy00Mi43NzE1OSwwIC03Ny40NDQ4MiwtMzQuNjczMjIgLTc3LjQ0NDgyLC03Ny40NDQ4MXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMjAiLz48cGF0aCBkPSJNMjg2Ljk2NzA1LDE2MS44MzM0M2MtNi41MzgzNiw2LjYwODEgLTE3LjE5MjY1LDYuNjY3MTEgLTIzLjgwNDIxLDAuMTI5N2MtNi42MDgxLC02LjUzODM1IC02LjY2MzYzLC0xNy4xOTM2MSAtMC4xMjUyOCwtMjMuODAxN2M2LjUzODM2LC02LjYwODEgMzYuMTQwNzMsLTEyLjkyNjQzIDM2LjQzMzM3LC0xMi42Mjc2N2MwLjI5MjY0LDAuMjk4NzUgLTUuOTY1NTEsMjkuNjkxNTggLTEyLjUwMzg4LDM2LjI5OTY3eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2EzNzQyZSIgc3Ryb2tlLXdpZHRoPSIzMCIvPjxwYXRoIGQ9Ik0yODYuOTY3MDUsMTYxLjgzMzQzYy02LjUzODM2LDYuNjA4MSAtMTcuMTkyNjUsNi42NjcxMSAtMjMuODA0MjEsMC4xMjk3Yy02LjYwODEsLTYuNTM4MzUgLTYuNjYzNjMsLTE3LjE5MzYxIC0wLjEyNTI4LC0yMy44MDE3YzYuNTM4MzYsLTYuNjA4MSAzNi4xNDA3NCwtMTIuOTI2NDQgMzYuNDMzMzcsLTEyLjYyNzY3YzAuMjkyNjQsMC4yOTg3NSAtNS45NjU1MiwyOS42OTE1OCAtMTIuNTAzODgsMzYuMjk5Njh6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEwIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6OTcuNDQ0NzI5OTk5OTk5OTk6OTcuNDQ1MDEtLT4=';
  const miniDatetime = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOTQuODg5NjMiIGhlaWdodD0iMTk0Ljg4OTY1IiB2aWV3Qm94PSIwLDAsMTk0Ljg4OTYzLDE5NC44ODk2NSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ny41NTUyNywtNTIuNTU0OTgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yNDkuMjI4NDgsNzIuNTU1YzAuNDc5OTMsMC4wMDAwMSAwLjg3MDkyLDAuNjgyODYgMC44NzA5NSwxLjUyMTE5bDAuMDAwMDEsMjYuNDk1ODFjMCwwLjgzODM2IC0wLjM5MTAyLDEuNTIxMTkgLTAuODcwOTQsMS41MjExNmwtMTEuMzk0MTYsLTAuMDAwMDJjLTAuNDc5OTMsMC4wMDAwMSAtMC44NzA5NCwtMC42ODI4MyAtMC44NzA5NCwtMS41MjExN3YtMjYuNDk1OGMwLC0wLjgzODM2IDAuMzkxMDEsLTEuNTIxMTkgMC44NzA5NCwtMS41MjExOXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O25vSG92ZXImcXVvdDs6ZmFsc2UsJnF1b3Q7b3JpZ0l0ZW0mcXVvdDs6WyZxdW90O1BhdGgmcXVvdDsseyZxdW90O2FwcGx5TWF0cml4JnF1b3Q7OnRydWUsJnF1b3Q7c2VnbWVudHMmcXVvdDs6W1tbNzI2LjUyODEsMTgxLjA0ODg1XSxbMCwwXSxbMCwtMTAuMDI0OThdXSxbWzcwOC4zNDQ5NSwxNjIuODY1N10sWzEwLjAyNDk4LDBdLFswLDBdXSxbWzM5MS42NTUwNSwxNjIuODY1N10sWzAsMF0sWy0xMC4wMjQ5OCwwXV0sW1szNzMuNDcxOSwxODEuMDQ4ODVdLFswLC0xMC4wMjQ5OF0sWzAsMF1dLFtbMzczLjQ3MTksNDE4Ljk0NTA5XSxbMCwwXSxbMCwxMC4wMjQ5OF1dLFtbMzkxLjY1NTA1LDQzNy4xMjgyNF0sWy0xMC4wMjQ5OCwwXSxbMCwwXV0sW1s3MDguMzQ0OTUsNDM3LjEyODI0XSxbMCwwXSxbMTAuMDI0OTgsMF1dLFtbNzI2LjUyODEsNDE4Ljk0NTA5XSxbMCwxMC4wMjQ5OF0sWzAsMF1dXSwmcXVvdDtjbG9zZWQmcXVvdDs6dHJ1ZSwmcXVvdDtmaWxsQ29sb3ImcXVvdDs6WzAsMCwwLDFdfV0sJnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNhMzc0MmUiIHN0cm9rZT0iI2EzNzQyZSIgc3Ryb2tlLXdpZHRoPSI0MCIvPjxwYXRoIGQ9Ik0zMTQuOTA4NjgsNzIuNTU1YzAuNDc5OTMsMC4wMDAwMSAwLjg3MDkyLDAuNjgyODYgMC44NzA5NSwxLjUyMTE5djI2LjQ5NTgxYzAsMC44MzgzNiAtMC4zOTEwMiwxLjUyMTE5IC0wLjg3MDk0LDEuNTIxMTZsLTExLjM5NDE2LC0wLjAwMDAyYy0wLjQ3OTkzLDAuMDAwMDEgLTAuODcwOTQsLTAuNjgyODMgLTAuODcwOTQsLTEuNTIxMTd2LTI2LjQ5NThjMCwtMC44MzgzNiAwLjM5MTAxLC0xLjUyMTE5IDAuODcwOTQsLTEuNTIxMTl6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtub0hvdmVyJnF1b3Q7OmZhbHNlLCZxdW90O29yaWdJdGVtJnF1b3Q7OlsmcXVvdDtQYXRoJnF1b3Q7LHsmcXVvdDthcHBseU1hdHJpeCZxdW90Ozp0cnVlLCZxdW90O3NlZ21lbnRzJnF1b3Q7OltbWzcyNi41MjgxLDE4MS4wNDg4NV0sWzAsMF0sWzAsLTEwLjAyNDk4XV0sW1s3MDguMzQ0OTUsMTYyLjg2NTddLFsxMC4wMjQ5OCwwXSxbMCwwXV0sW1szOTEuNjU1MDUsMTYyLjg2NTddLFswLDBdLFstMTAuMDI0OTgsMF1dLFtbMzczLjQ3MTksMTgxLjA0ODg1XSxbMCwtMTAuMDI0OThdLFswLDBdXSxbWzM3My40NzE5LDQxOC45NDUwOV0sWzAsMF0sWzAsMTAuMDI0OThdXSxbWzM5MS42NTUwNSw0MzcuMTI4MjRdLFstMTAuMDI0OTgsMF0sWzAsMF1dLFtbNzA4LjM0NDk1LDQzNy4xMjgyNF0sWzAsMF0sWzEwLjAyNDk4LDBdXSxbWzcyNi41MjgxLDQxOC45NDUwOV0sWzAsMTAuMDI0OThdLFswLDBdXV0sJnF1b3Q7Y2xvc2VkJnF1b3Q7OnRydWUsJnF1b3Q7ZmlsbENvbG9yJnF1b3Q7OlswLDAsMCwxXX1dLCZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjYTM3NDJlIiBzdHJva2U9IiNhMzc0MmUiIHN0cm9rZS13aWR0aD0iNDAiLz48cGF0aCBkPSJNMTk3LjU1NTI3LDk2LjYxNDI5YzAsLTUuMTE5MzEgMy41ODA2MiwtOS4yOTAyMiA3Ljk3NjYyLC05LjI5MDIyaDEzOC45MzY0YzQuMzk2MDEsMCA3Ljk3NjYxLDQuMTcwOTEgNy45NzY2MSw5LjI5MDIydjEyMS41NDAxMmMwLDUuMTE5MzEgLTMuNTgwNjIsOS4yOTAyMiAtNy45NzY2MSw5LjI5MDIyaC0xMzguOTM2NGMtNC4zOTYwMSwwIC03Ljk3NjYyLC00LjE3MDkxIC03Ljk3NjYyLC05LjI5MDIyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7bm9Ib3ZlciZxdW90OzpmYWxzZSwmcXVvdDtvcmlnSXRlbSZxdW90OzpbJnF1b3Q7UGF0aCZxdW90Oyx7JnF1b3Q7YXBwbHlNYXRyaXgmcXVvdDs6dHJ1ZSwmcXVvdDtzZWdtZW50cyZxdW90OzpbW1s3MjYuNTI4MSwxODEuMDQ4ODVdLFswLDBdLFswLC0xMC4wMjQ5OF1dLFtbNzA4LjM0NDk1LDE2Mi44NjU3XSxbMTAuMDI0OTgsMF0sWzAsMF1dLFtbMzkxLjY1NTA1LDE2Mi44NjU3XSxbMCwwXSxbLTEwLjAyNDk4LDBdXSxbWzM3My40NzE5LDE4MS4wNDg4NV0sWzAsLTEwLjAyNDk4XSxbMCwwXV0sW1szNzMuNDcxOSw0MTguOTQ1MDldLFswLDBdLFswLDEwLjAyNDk4XV0sW1szOTEuNjU1MDUsNDM3LjEyODI0XSxbLTEwLjAyNDk4LDBdLFswLDBdXSxbWzcwOC4zNDQ5NSw0MzcuMTI4MjRdLFswLDBdLFsxMC4wMjQ5OCwwXV0sW1s3MjYuNTI4MSw0MTguOTQ1MDldLFswLDEwLjAyNDk4XSxbMCwwXV1dLCZxdW90O2Nsb3NlZCZxdW90Ozp0cnVlLCZxdW90O2ZpbGxDb2xvciZxdW90OzpbMCwwLDAsMV19XSwmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYTM3NDJlIiBzdHJva2Utd2lkdGg9IjQwIi8+PHBhdGggZD0iTTE5Ny41NTUyNyw5Ni42MTQyOWMwLC01LjExOTMxIDMuNTgwNjIsLTkuMjkwMjIgNy45NzY2MiwtOS4yOTAyMmgxMzguOTM2NGM0LjM5NjAxLDAgNy45NzY2MSw0LjE3MDkxIDcuOTc2NjEsOS4yOTAyMnYxMjEuNTQwMTJjMCw1LjExOTMxIC0zLjU4MDYyLDkuMjkwMjIgLTcuOTc2NjEsOS4yOTAyMmgtMTM4LjkzNjRjLTQuMzk2MDEsMCAtNy45NzY2MiwtNC4xNzA5MSAtNy45NzY2MiwtOS4yOTAyMnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O25vSG92ZXImcXVvdDs6ZmFsc2UsJnF1b3Q7b3JpZ0l0ZW0mcXVvdDs6WyZxdW90O1BhdGgmcXVvdDsseyZxdW90O2FwcGx5TWF0cml4JnF1b3Q7OnRydWUsJnF1b3Q7c2VnbWVudHMmcXVvdDs6W1tbNzI2LjUyODEsMTgxLjA0ODg1XSxbMCwwXSxbMCwtMTAuMDI0OThdXSxbWzcwOC4zNDQ5NSwxNjIuODY1N10sWzEwLjAyNDk4LDBdLFswLDBdXSxbWzM5MS42NTUwNSwxNjIuODY1N10sWzAsMF0sWy0xMC4wMjQ5OCwwXV0sW1szNzMuNDcxOSwxODEuMDQ4ODVdLFswLC0xMC4wMjQ5OF0sWzAsMF1dLFtbMzczLjQ3MTksNDE4Ljk0NTA5XSxbMCwwXSxbMCwxMC4wMjQ5OF1dLFtbMzkxLjY1NTA1LDQzNy4xMjgyNF0sWy0xMC4wMjQ5OCwwXSxbMCwwXV0sW1s3MDguMzQ0OTUsNDM3LjEyODI0XSxbMCwwXSxbMTAuMDI0OTgsMF1dLFtbNzI2LjUyODEsNDE4Ljk0NTA5XSxbMCwxMC4wMjQ5OF0sWzAsMF1dXSwmcXVvdDtjbG9zZWQmcXVvdDs6dHJ1ZSwmcXVvdDtmaWxsQ29sb3ImcXVvdDs6WzAsMCwwLDFdfV0sJnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik0yNDkuMjI4NDgsNzIuNTU1YzAuNDc5OTMsMC4wMDAwMSAwLjg3MDkyLDAuNjgyODYgMC44NzA5NSwxLjUyMTE5bDAuMDAwMDEsMjYuNDk1ODFjMCwwLjgzODM2IC0wLjM5MTAyLDEuNTIxMTkgLTAuODcwOTQsMS41MjExNmwtMTEuMzk0MTYsLTAuMDAwMDJjLTAuNDc5OTMsMC4wMDAwMSAtMC44NzA5NCwtMC42ODI4MyAtMC44NzA5NCwtMS41MjExN3YtMjYuNDk1OGMwLC0wLjgzODM2IDAuMzkxMDEsLTEuNTIxMTkgMC44NzA5NCwtMS41MjExOXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O25vSG92ZXImcXVvdDs6ZmFsc2UsJnF1b3Q7b3JpZ0l0ZW0mcXVvdDs6WyZxdW90O1BhdGgmcXVvdDsseyZxdW90O2FwcGx5TWF0cml4JnF1b3Q7OnRydWUsJnF1b3Q7c2VnbWVudHMmcXVvdDs6W1tbNzI2LjUyODEsMTgxLjA0ODg1XSxbMCwwXSxbMCwtMTAuMDI0OThdXSxbWzcwOC4zNDQ5NSwxNjIuODY1N10sWzEwLjAyNDk4LDBdLFswLDBdXSxbWzM5MS42NTUwNSwxNjIuODY1N10sWzAsMF0sWy0xMC4wMjQ5OCwwXV0sW1szNzMuNDcxOSwxODEuMDQ4ODVdLFswLC0xMC4wMjQ5OF0sWzAsMF1dLFtbMzczLjQ3MTksNDE4Ljk0NTA5XSxbMCwwXSxbMCwxMC4wMjQ5OF1dLFtbMzkxLjY1NTA1LDQzNy4xMjgyNF0sWy0xMC4wMjQ5OCwwXSxbMCwwXV0sW1s3MDguMzQ0OTUsNDM3LjEyODI0XSxbMCwwXSxbMTAuMDI0OTgsMF1dLFtbNzI2LjUyODEsNDE4Ljk0NTA5XSxbMCwxMC4wMjQ5OF0sWzAsMF1dXSwmcXVvdDtjbG9zZWQmcXVvdDs6dHJ1ZSwmcXVvdDtmaWxsQ29sb3ImcXVvdDs6WzAsMCwwLDFdfV0sJnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik0zMTQuOTA4NjgsNzIuNTU1YzAuNDc5OTMsMC4wMDAwMSAwLjg3MDkyLDAuNjgyODYgMC44NzA5NSwxLjUyMTE5djI2LjQ5NTgxYzAsMC44MzgzNiAtMC4zOTEwMiwxLjUyMTE5IC0wLjg3MDk0LDEuNTIxMTZsLTExLjM5NDE2LC0wLjAwMDAyYy0wLjQ3OTkzLDAuMDAwMDEgLTAuODcwOTQsLTAuNjgyODMgLTAuODcwOTQsLTEuNTIxMTd2LTI2LjQ5NThjMCwtMC44MzgzNiAwLjM5MTAxLC0xLjUyMTE5IDAuODcwOTQsLTEuNTIxMTl6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtub0hvdmVyJnF1b3Q7OmZhbHNlLCZxdW90O29yaWdJdGVtJnF1b3Q7OlsmcXVvdDtQYXRoJnF1b3Q7LHsmcXVvdDthcHBseU1hdHJpeCZxdW90Ozp0cnVlLCZxdW90O3NlZ21lbnRzJnF1b3Q7OltbWzcyNi41MjgxLDE4MS4wNDg4NV0sWzAsMF0sWzAsLTEwLjAyNDk4XV0sW1s3MDguMzQ0OTUsMTYyLjg2NTddLFsxMC4wMjQ5OCwwXSxbMCwwXV0sW1szOTEuNjU1MDUsMTYyLjg2NTddLFswLDBdLFstMTAuMDI0OTgsMF1dLFtbMzczLjQ3MTksMTgxLjA0ODg1XSxbMCwtMTAuMDI0OThdLFswLDBdXSxbWzM3My40NzE5LDQxOC45NDUwOV0sWzAsMF0sWzAsMTAuMDI0OThdXSxbWzM5MS42NTUwNSw0MzcuMTI4MjRdLFstMTAuMDI0OTgsMF0sWzAsMF1dLFtbNzA4LjM0NDk1LDQzNy4xMjgyNF0sWzAsMF0sWzEwLjAyNDk4LDBdXSxbWzcyNi41MjgxLDQxOC45NDUwOV0sWzAsMTAuMDI0OThdLFswLDBdXV0sJnF1b3Q7Y2xvc2VkJnF1b3Q7OnRydWUsJnF1b3Q7ZmlsbENvbG9yJnF1b3Q7OlswLDAsMCwxXX1dLCZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMjAiLz48Zz48cGF0aCBkPSJNMjczLjE0NjU0LDE3NC42NTY1NGwtMC4wMDA2MiwwLjA3MzI0aDI0LjI4ODc5bC0yLjE2NjY2LDEyLjQ2NTM1aC00Mi42ODEzNGMtMC4xNDA1LC0yLjQ5MzIgMC40Mzg0NSwtNC43OTA0NCAxLjA3MDYsLTYuODkyNTljMC42MzE5NCwtMi4xMDE1MSAxLjU1NTg1LC00LjAwNzkyIDIuNzc0LC01LjcxOTQ2YzEuMDI5NDQsLTEuNDY2NzUgMi4yMTI0MiwtMi44MzQ3NyAzLjU0NjY3LC00LjEwNjIxYzEuMzM0MjQsLTEuMjcwNzkgMi43NjIsLTIuNDU2NjkgNC4yODM5MiwtMy41NTYzOGMxLjUyMDY3LC0xLjEwMDEyIDMuMTAwOTUsLTIuMTUwNzcgNC43NDA0LC0zLjE1MzIzYzEuNjM4MjEsLTEuMDAxMzggMy4yMzA0OSwtMS45OTEzMSA0Ljc3NTU4LC0yLjk2OThjMi42NzM4OCwtMS43MTcwOCA2Ljc3NzM2LC0zLjUyOTk3IDcuMDg2NDgsLTcuNjI4MzhjMC4zMDkxMiwtNC4wOTg0MSAtMi43Mjc5MSwtNi42ODM2OCAtNS45NTUxNSwtNy4zNzEyYy0yLjMxNzUxLC0wLjQ5MzcxIC01LjAzMTcxLDAuMjY4MDMgLTYuODM2NTUsMS44NjUzMmMtMi4zODUsMi4xMTA3NCAtMy4zNDExNyw0Ljk4MTI1IC0zLjM0MTE3LDQuOTgxMjVoLTExLjMyNzkyYzAsMCAwLjYzMjM0LC0zLjUxOTMzIDEuNTUzNDQsLTUuNTUyMjVjMC45MjExLC0yLjAzMjkyIDIuMjQ3MzksLTMuODgwMjIgNC4wNzMyOCwtNS43NjI2NWMxLjgyNTg5LC0xLjg4MTEzIDQuMDYxMjgsLTMuMzEwOTUgNi43MDY3OSwtNC4yODk0M2MyLjY0NDg5LC0wLjk3NzE4IDUuNjA2NTcsLTEuNDY2NTQgOC44ODQwMywtMS40NjY1NGMyLjk0OTksMCA1LjY1MzM0LDAuMzI5OTIgOC4xMTE1OCwwLjk4OTk0YzIuNDU3ODMsMC42NjAwMiA0LjU2NTEzLDEuNjQ5OTYgNi4zMjA0NiwyLjk2OThjMS43NTYxNSwxLjMxOTg0IDMuMTEzMTYsMi45OTUwOCA0LjA3MzY5LDUuMDIyOTFjMC45NTkwOSwyLjAyOTEzIDEuNDM5NTcsNC4zODgxNiAxLjQzOTU3LDcuMDc2MDJjMCwzLjI3NTk1IC0wLjY3OTEyLDYuMDM4MTIgLTIuMDM2NzQsOC4yODYxYy0xLjM1ODI0LDIuMjQ4NjMgLTMuMDg5NzcsNC4yMTU5OCAtNS4xOTY4Nyw1LjkwMjQ1Yy0yLjEwNjg5LDEuNjg2NjkgLTQuNDI0NjIsMy4yMTQ4IC02Ljk1MjYxLDQuNTgyODJjLTIuNTI4MzksMS4zNjkxIC00Ljk0MDI4LDIuNzg2NTkgLTcuMjMzNjEsNC4yNTI5MnoiIGZpbGw9IiNhMzc0MmUiIHN0cm9rZT0iI2EzNzQyZSIgc3Ryb2tlLXdpZHRoPSIyNy41Ii8+PHBhdGggZD0iTTI3My4xNDY1NCwxNzQuNjU2NTRsLTAuMDAwNjIsMC4wNzMyNGgyNC4yODg3OWwtMi4xNjY2NiwxMi40NjUzNWgtNDIuNjgxMzRjLTAuMTQwNSwtMi40OTMyIDAuNDM4NDUsLTQuNzkwNDQgMS4wNzA2LC02Ljg5MjU5YzAuNjMxOTQsLTIuMTAxNTEgMS41NTU4NSwtNC4wMDc5MiAyLjc3NCwtNS43MTk0NmMxLjAyOTQ0LC0xLjQ2Njc1IDIuMjEyNDIsLTIuODM0NzcgMy41NDY2NywtNC4xMDYyMWMxLjMzNDI0LC0xLjI3MDc5IDIuNzYyLC0yLjQ1NjY5IDQuMjgzOTIsLTMuNTU2MzhjMS41MjA2NywtMS4xMDAxMiAzLjEwMDk1LC0yLjE1MDc3IDQuNzQwNCwtMy4xNTMyM2MxLjYzODIxLC0xLjAwMTM4IDMuMjMwNDksLTEuOTkxMzEgNC43NzU1OCwtMi45Njk4YzIuNjczODgsLTEuNzE3MDggNi43NzczNiwtMy41Mjk5NyA3LjA4NjQ4LC03LjYyODM4YzAuMzA5MTIsLTQuMDk4NDEgLTIuNzI3OTEsLTYuNjgzNjggLTUuOTU1MTUsLTcuMzcxMmMtMi4zMTc1MSwtMC40OTM3MSAtNS4wMzE3MSwwLjI2ODAzIC02LjgzNjU1LDEuODY1MzJjLTIuMzg1LDIuMTEwNzQgLTMuMzQxMTcsNC45ODEyNSAtMy4zNDExNyw0Ljk4MTI1aC0xMS4zMjc5MmMwLDAgMC42MzIzNCwtMy41MTkzMyAxLjU1MzQ0LC01LjU1MjI1YzAuOTIxMSwtMi4wMzI5MiAyLjI0NzM5LC0zLjg4MDIyIDQuMDczMjgsLTUuNzYyNjVjMS44MjU4OSwtMS44ODExMyA0LjA2MTI4LC0zLjMxMDk1IDYuNzA2NzksLTQuMjg5NDNjMi42NDQ4OSwtMC45NzcxOCA1LjYwNjU3LC0xLjQ2NjU0IDguODg0MDMsLTEuNDY2NTRjMi45NDk5LDAgNS42NTMzNCwwLjMyOTkyIDguMTExNTgsMC45ODk5NGMyLjQ1NzgzLDAuNjYwMDIgNC41NjUxMywxLjY0OTk2IDYuMzIwNDYsMi45Njk4YzEuNzU2MTUsMS4zMTk4NCAzLjExMzE2LDIuOTk1MDggNC4wNzM2OSw1LjAyMjkxYzAuOTU5MDksMi4wMjkxMyAxLjQzOTU3LDQuMzg4MTYgMS40Mzk1Nyw3LjA3NjAyYzAsMy4yNzU5NSAtMC42NzkxMiw2LjAzODEyIC0yLjAzNjc0LDguMjg2MWMtMS4zNTgyNCwyLjI0ODYzIC0zLjA4OTc3LDQuMjE1OTggLTUuMTk2ODcsNS45MDI0NWMtMi4xMDY4OSwxLjY4NjY5IC00LjQyNDYyLDMuMjE0OCAtNi45NTI2MSw0LjU4MjgyYy0yLjUyODM5LDEuMzY5MSAtNC45NDAyOCwyLjc4NjU5IC03LjIzMzYxLDQuMjUyOTJ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNy41Ii8+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjk3LjQ0NDcyOTk5OTk5OTk5Ojk3LjQ0NTAyLS0+';
  const miniJson = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOS4yMDkxNiIgaGVpZ2h0PSIxOS4wNzY2MiIgdmlld0JveD0iMCwwLDE5LjIwOTE2LDE5LjA3NjYyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLjEwNDY5LC0xNzAuODMzNTYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjYTM3NDJlIiBzdHJva2Utd2lkdGg9IjAuOTc1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0MS4wMTI1MiwxODUuMzM3NzNjNC42MzY1OCwtMy41MjM2NiAxLjQ1MjgsLTEwLjgxNjQ4IC0yLjU0OTY0LC0xMC4xOTE2MmMtNy4wNzAyNywxLjEwMzgxIC01Ljg0MDM1LDEwLjM5ODYzIC0zLjU4Njk1LDEzLjEzODFjMC4xMTM0MywwLjEzNzg5IC0wLjA4MTQyLDAuMTYwOTIgLTAuMjMyOTgsMC4wNjY1M2MtMy40MjgsLTIuMTM0ODQgLTQuODAwMDUsLTYuNjE2MjMgLTMuNjUzODUsLTEwLjQ1OTM5YzAuOTY2MDksLTMuMjM5MjMgMy45Nzg0MiwtNi40NDczMyA4LjU0MjA1LC02LjU3MDI4YzcuMjAyNTEsLTAuNjU2OTcgOS4zNDg0NCwxMy4zNTcxNiAxLjQ4MTM3LDE0LjAxNjY2eiIvPjxwYXRoIGQ9Ik0yNDEuNjQ5MjgsMTg1LjQyODljNS40NTM4LC0xLjM5MDQzIDUuNjMyODksLTguOTc4MTMgMi41NjgwNywtMTMuMTMzNTRjLTAuMDg0OTUsLTAuMTE1MTggLTAuMTY2ODIsLTAuMzQyMTMgLTAuMDQ3ODUsLTAuMjYyNTdjOC45MDM1Myw1Ljk1Mzk5IDMuNDQ5NzQsMTYuMzAyNDkgLTMuMTM3MDUsMTcuMzg5OWMtNC4zMzk1MywwLjcxNjQyIC03LjExODg2LC0yLjEzMTMgLTcuNjEyODYsLTYuNTE3MjdjLTAuMzM4NTgsLTMuMDA2MDYgMC41NDk4NywtNy4xNjY1NSA0LjY2ODksLTcuMzc2NjNjLTQuMDcxMiwzLjAxNDU2IC0xLjY4MzYxLDExLjQ4MTA1IDMuNTYwNzksOS45MDAxMXoiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo5Ljg5NTMwODI4MDc3MDg0ODo5LjE2NjQzNTAwMDAwMDAwNy0tPg==';

  const cast = Scratch.Cast;

  class ScratchDate {

    getInfo() {
      return {

        id: 'truefantomdate',
        name: 'Date',

        color1: '#cc9139',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'is_timestamp_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [IMAGE] [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniTimestamp
              }
            }
          },
          {
            opcode: 'is_datetime_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [IMAGE] [A] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              }
            }
          },
          '---',
          {
            opcode: 'timestamp_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'current utc [IMAGE]',
            arguments: {
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniTimestamp
              }
            }
          },
          {
            opcode: 'datetime_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'current utc [IMAGE]',
            arguments: {
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              }
            }
          },
          '---',
          {
            opcode: 'regexp_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] with pattern [A] and flags [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              }
            }
          },
          {
            opcode: 'regexp_contains_flags_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[IMAGE] [A] contains flags [B] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              }
            }
          },
          {
            opcode: 'regexp_components_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[B] of [IMAGE] [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                menu: 'components_menu'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              }
            }
          },
          '---',
          {
            opcode: 'regexp_set_pattern_flags_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] set [B] of [IMAGE] [A] to [C]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                menu: 'components_menu'
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              }
            }
          },
          {
            opcode: 'regexp_add_flags_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] add flags [B] to [IMAGE] [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              }
            }
          },
          {
            opcode: 'regexp_delete_flags_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE] delete flags [B] of [IMAGE] [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              }
            }
          },
          '---',
          {
            opcode: 'regexp_test_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[A] matches with [IMAGE] [B] ?',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              }
            }
          },
          {
            opcode: 'regexp_replace_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace matches of [A] with [IMAGE] [B] to [C]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'banana'
              },
              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              }
            }
          },
          {
            opcode: 'regexp_split_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE2] [A] split by matches with [IMAGE1] [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              IMAGE1: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              },
              IMAGE2: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniJson
              }
            }
          },
          {
            opcode: 'regexp_match_block',
            blockType: Scratch.BlockType.REPORTER,
            text: '[IMAGE2] match [C] of [A] with [IMAGE1] [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/apple/gi'
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                menu: 'match_menu'
              },
              IMAGE1: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniDatetime
              },
              IMAGE2: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: miniJson
              }
            }
          }
        ],
        menus: {
          components_menu: {
            acceptReporters: false,
            items: ['pattern', 'flags']
          },
          match_menu: {
            acceptReporters: false,
            items: [miniDatetime, 'keys', 'pairs', 'map']
          }
        }
      };
    }

    is_regexp_block({A}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        return RegExpCompare(redat, restr);
      } catch(err) {return false}
    }
    regexp_block({A, B}) {
      try {
        return toRegExpString(new RegExp(cast.toString(A), cast.toString(B)));
      } catch(err) {return ''}
    }
    regexp_contains_flags_block({A, B}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          let output = true;
          let flags = Array.from(redat.flags);
          Array.from(cast.toString(B)).forEach(flag => flags.includes(flag) ? flags.splice(flags.indexOf(flag), 1) : output = false);
          return output;
        }
        return false;
      } catch(err) {return false}
    }
    regexp_components_block({A, B}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          const components = cast.toString(B).toLowerCase();
          switch (components) {
            case 'pattern': return redat.source;
            case 'flags': return redat.flags;
          }
        }
        return '';
      } catch(err) {return ''}
    }
    regexp_set_pattern_flags_block({A, B, C}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          const components = cast.toString(B).toLowerCase();
          switch (components) {
            case 'pattern': return toRegExpString(new RegExp(cast.toString(C), redat.flags));
            case 'flags': return toRegExpString(new RegExp(redat.source, cast.toString(C)));
          }
        }
        return '';
      } catch(err) {return ''}
    }
    regexp_add_flags_block({A, B}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          let flagtest = new RegExp('test', cast.toString(B));
          let flags = Array.from(redat.flags);
          Array.from(cast.toString(B)).forEach(flag => flags.includes(flag) ? void(0) : flags.push(flag));
          return toRegExpString(new RegExp(redat.source, flags.join('')));
        }
        return '';
      } catch(err) {return ''}
    }
    regexp_delete_flags_block({A, B}) {
      try {
        let restr = cast.toString(A);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          let flagtest = new RegExp('test', cast.toString(B));
          let flags = Array.from(redat.flags);
          Array.from(cast.toString(B)).forEach(flag => flags.includes(flag) ? flags.splice(flags.indexOf(flag), 1) : void(0));
          return toRegExpString(new RegExp(redat.source, flags.join('')));
        }
        return '';
      } catch(err) {return ''}
    }
    regexp_test_block({A, B}) {
      try {
        let restr = cast.toString(B);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {return redat.test(cast.toString(A))}
        return false;
      } catch(err) {return false}
    }
    regexp_replace_block({A, B, C}) {
      try {
        let restr = cast.toString(B);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {return cast.toString(A).replace(redat, cast.toString(C))}
        return '';
      } catch(err) {return ''}
    }
    regexp_split_block({A, B}) {
      try {
        let restr = cast.toString(B);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {return toJsonString(cast.toString(A).split(redat) || [])}
        return '';
      } catch(err) {return ''}
    }
    regexp_match_block({A, B, C}) {
      try {
        let restr = cast.toString(B);
        let redat = toRegExpData(restr);
        let str = cast.toString(A);
        if (RegExpCompare(redat, restr)) {
          const gredat = redat.global ? redat : new RegExp(redat.source, redat.flags + 'g');
          const match = cast.toString(C).toLowerCase();
          let data;
          switch (match) {
            case 'values':
              data = str.match(redat) || [];
              return toJsonString(data);
            case 'keys':
              data = Array.from(str.matchAll(gredat)).map(val => String(val.index + 1));
              return toJsonString(redat.global ? data : data[0] ? [data[0]] : []);
            case 'pairs':
              data = Array.from(str.matchAll(gredat)).reduce((obj, val) => (obj[val.index + 1] = val[0], obj), {});
              return toJsonString(redat.global ? data : Object.keys(data)[0] ? {[Object.keys(data)[0]] : Object.values(data)[0]} : {});
            case 'map':
              data = Array.from(str.matchAll(gredat)).map(val => [String(val.index + 1), val[0]]);
              return toJsonString(redat.global ? data : data[0] ? [data[0]] : []);
          }
        }
        return '';
      } catch(err) {return ''}
    }
    regexp_match_all_block({A, B}) {
      try {
        let restr = cast.toString(B);
        let redat = toRegExpData(restr);
        if (RegExpCompare(redat, restr)) {
          if (redat.global) {return toJsonString(Array.from(cast.toString(A).matchAll(redat)).map(val => val.index + 1))} 
          else {return toJsonString([cast.toString(A).search(redat) + 1])}
        }
        return '';
      } catch(err) {return ''}
    }
  }

  Scratch.extensions.register(new ScratchDate());
})(Scratch);
