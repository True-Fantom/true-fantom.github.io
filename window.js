(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgdmlld0JveD0iMCwwLDIyNS4zNTQ4LDIyNS4zNTQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjg4LC02Ny4zMjI2NCkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTEyNy4zMjI4OCwxODAuMDAwMDRjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6IiBmaWxsPSIjNjYwMGZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxnIGZpbGw9IiNmZmZmZmYiPjxnPjxwYXRoIGQ9Ik0yNzkuNTk3NTIsMTkxLjUxNzdjMC44NzQxNywwLjg3NDk0IDEuMzY0NDYsMi4wNjE2IDEuMzYyODQsMy4yOTg0MnYyMS40ODkyNGMtMC4wMDExMywyLjU3NTQ4IC0yLjA4ODY3LDQuNjYzMDMgLTQuNjY0MTUsNC42NjQxNWgtMjEuNDkxM2MtMi41NzUxMywtMC4wMDExMyAtNC42NjIxLC0yLjA4OTAyIC00LjY2MjEsLTQuNjY0MTV2LTIxLjQ4OTI0YzAuMDAxMTMsLTIuNTc1NDggMi4wODg2NywtNC42NjMwMiA0LjY2NDE1LC00LjY2NDE1aDIxLjQ5MzM2YzEuMjM2OCwtMC4wMDA1NiAyLjQyMzA0LDAuNDkwODEgMy4yOTcyLDEuMzY1NzR6IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zMDUuMzc1MywxOTEuNTE3NzFjMC44NzQxNywwLjg3NDk0IDEuMzY0NDYsMi4wNjE2IDEuMzYyODQsMy4yOTg0MnYyMS40ODkyNGMtMC4wMDExMywyLjU3NTQ4IC0yLjA4ODY3LDQuNjYzMDMgLTQuNjY0MTUsNC42NjQxNWgtMjEuNDkxM2MtMi41NzUxMywtMC4wMDExMyAtNC42NjIxLC0yLjA4OTAyIC00LjY2MjEsLTQuNjY0MTV2LTIxLjQ4OTI0YzAuMDAxMTMsLTIuNTc1NDggMi4wODg2NywtNC42NjMwMiA0LjY2NDE1LC00LjY2NDE1aDIxLjQ5MzM2YzEuMjM2OCwtMC4wMDA1NiAyLjQyMzA0LDAuNDkwODEgMy4yOTcyLDEuMzY1NzR6IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zMDUuMzc1MzEsMjE3LjI5NTQ4YzAuODc0MTcsMC44NzQ5NCAxLjM2NDQ2LDIuMDYxNiAxLjM2Mjg0LDMuMjk4NDJ2MjEuNDg5MjRjLTAuMDAxMTMsMi41NzU0OCAtMi4wODg2Nyw0LjY2MzAzIC00LjY2NDE1LDQuNjY0MTVoLTIxLjQ5MTNjLTIuNTc1MTMsLTAuMDAxMTMgLTQuNjYyMSwtMi4wODkwMiAtNC42NjIxLC00LjY2NDE1di0yMS40ODkyNGMwLjAwMTEzLC0yLjU3NTQ4IDIuMDg4NjcsLTQuNjYzMDIgNC42NjQxNSwtNC42NjQxNWgyMS40OTMzNmMxLjIzNjgsLTAuMDAwNTYgMi40MjMwNCwwLjQ5MDgxIDMuMjk3MiwxLjM2NTc0eiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjc5LjU5NzUzLDIxNy4yOTU0OWMwLjg3NDE3LDAuODc0OTQgMS4zNjQ0NiwyLjA2MTYgMS4zNjI4NCwzLjI5ODQydjIxLjQ4OTI0Yy0wLjAwMTEzLDIuNTc1NDggLTIuMDg4NjcsNC42NjMwMyAtNC42NjQxNSw0LjY2NDE1aC0yMS40OTEzYy0yLjU3NTEzLC0wLjAwMTEzIC00LjY2MjEsLTIuMDg5MDIgLTQuNjYyMSwtNC42NjQxNXYtMjEuNDg5MjRjMC4wMDExMywtMi41NzU0OCAyLjA4ODY3LC00LjY2MzAyIDQuNjY0MTUsLTQuNjY0MTVoMjEuNDkzMzZjMS4yMzY4LC0wLjAwMDU2IDIuNDIzMDQsMC40OTA4MSAzLjI5NzIsMS4zNjU3NHoiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTI2Ni44Nzc5OCwyNDYuNzQxMjl2LTU2LjU4MzMzaDIzLjEyNXY1Ni41ODMzM3oiIHN0cm9rZT0iIzY2MDBmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTMwNi43MzIxNCwyMzAuMDEyMTFoLTU2LjU4MzMzdi0yMy4xMjVoNTYuNTgzMzN6IiBzdHJva2U9IiM2NjAwZmYiIHN0cm9rZS13aWR0aD0iMCIvPjwvZz48Zz48cGF0aCBkPSJNMjAyLjc1MjI4LDE3Mi44NTA5N2MwLjg3NDE3LDAuODc0OTQgMS4zNjQ0NiwyLjA2MTYgMS4zNjI4NCwzLjI5ODQydjIxLjQ4OTI0Yy0wLjAwMTEzLDIuNTc1NDggLTIuMDg4NjcsNC42NjMwMyAtNC42NjQxNSw0LjY2NDE1aC0yMS40OTEzYy0yLjU3NTEzLC0wLjAwMTEzIC00LjY2MjEsLTIuMDg5MDIgLTQuNjYyMSwtNC42NjQxNXYtMjEuNDg5MjRjMC4wMDExMywtMi41NzU0OCAyLjA4ODY3LC00LjY2MzAyIDQuNjY0MTUsLTQuNjY0MTVoMjEuNDkzMzZjMS4yMzY4LC0wLjAwMDU2IDIuNDIzMDQsMC40OTA4MSAzLjI5NzIsMS4zNjU3NHoiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIyOC41MzAwNiwxNzIuODUwOThjMC44NzQxNywwLjg3NDk0IDEuMzY0NDYsMi4wNjE2IDEuMzYyODQsMy4yOTg0MnYyMS40ODkyNGMtMC4wMDExMywyLjU3NTQ4IC0yLjA4ODY3LDQuNjYzMDMgLTQuNjY0MTUsNC42NjQxNWgtMjEuNDkxM2MtMi41NzUxMywtMC4wMDExMyAtNC42NjIxLC0yLjA4OTAyIC00LjY2MjEsLTQuNjY0MTV2LTIxLjQ4OTI0YzAuMDAxMTMsLTIuNTc1NDggMi4wODg2NywtNC42NjMwMiA0LjY2NDE1LC00LjY2NDE1aDIxLjQ5MzM2YzEuMjM2OCwtMC4wMDA1NiAyLjQyMzA0LDAuNDkwODEgMy4yOTcyLDEuMzY1NzR6IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMjguNTMwMDcsMjE3LjIyODc1YzAuODc0MTcsMC44NzQ5NCAxLjM2NDQ2LDIuMDYxNiAxLjM2Mjg0LDMuMjk4NDJ2MjEuNDg5MjRjLTAuMDAxMTMsMi41NzU0OCAtMi4wODg2Nyw0LjY2MzAzIC00LjY2NDE1LDQuNjY0MTVoLTIxLjQ5MTNjLTIuNTc1MTMsLTAuMDAxMTMgLTQuNjYyMSwtMi4wODkwMiAtNC42NjIxLC00LjY2NDE1di0yMS40ODkyNGMwLjAwMTEzLC0yLjU3NTQ4IDIuMDg4NjcsLTQuNjYzMDIgNC42NjQxNSwtNC42NjQxNWgyMS40OTMzNmMxLjIzNjgsLTAuMDAwNTYgMi40MjMwNCwwLjQ5MDgxIDMuMjk3MiwxLjM2NTc0eiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjAyLjc1MjI5LDIxNy4yMjg3NmMwLjg3NDE3LDAuODc0OTQgMS4zNjQ0NiwyLjA2MTYgMS4zNjI4NCwzLjI5ODQydjIxLjQ4OTI0Yy0wLjAwMTEzLDIuNTc1NDggLTIuMDg4NjcsNC42NjMwMyAtNC42NjQxNSw0LjY2NDE1aC0yMS40OTEzYy0yLjU3NTEzLC0wLjAwMTEzIC00LjY2MjEsLTIuMDg5MDIgLTQuNjYyMSwtNC42NjQxNXYtMjEuNDg5MjRjMC4wMDExMywtMi41NzU0OCAyLjA4ODY3LC00LjY2MzAyIDQuNjY0MTUsLTQuNjY0MTVoMjEuNDkzMzZjMS4yMzY4LC0wLjAwMDU2IDIuNDIzMDQsMC40OTA4MSAzLjI5NzIsMS4zNjU3NHoiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIyOS44ODY5LDIzMy43NzI5NWgtNTYuNTgzMzN2LTQ5LjM3NWg1Ni41ODMzM3oiIHN0cm9rZT0iIzY2MDBmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTE5MC4wMzI3NCwyNDYuNjgyNjd2LTc1LjE5NDQ0aDIzLjEyNXY3NS4xOTQ0NHoiIHN0cm9rZT0iIzY2MDBmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9nPjxnPjxwYXRoIGQ9Ik0yNzkuNTk3NTIsMTE0LjYyMzMxYzAuODc0MTcsMC44NzQ5NCAxLjM2NDQ2LDIuMDYxNiAxLjM2Mjg0LDMuMjk4NDJ2MjEuNDg5MjRjLTAuMDAxMTMsMi41NzU0OCAtMi4wODg2Nyw0LjY2MzAzIC00LjY2NDE1LDQuNjY0MTVoLTIxLjQ5MTNjLTIuNTc1MTMsLTAuMDAxMTMgLTQuNjYyMSwtMi4wODkwMiAtNC42NjIxLC00LjY2NDE1di0yMS40ODkyNGMwLjAwMTEzLC0yLjU3NTQ4IDIuMDg4NjcsLTQuNjYzMDIgNC42NjQxNSwtNC42NjQxNWgyMS40OTMzNmMxLjIzNjgsLTAuMDAwNTYgMi40MjMwNCwwLjQ5MDgxIDMuMjk3MiwxLjM2NTc0eiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMzA1LjM3NTMsMTE0LjYyMzMyYzAuODc0MTcsMC44NzQ5NCAxLjM2NDQ2LDIuMDYxNiAxLjM2Mjg0LDMuMjk4NDJ2MjEuNDg5MjRjLTAuMDAxMTMsMi41NzU0OCAtMi4wODg2Nyw0LjY2MzAzIC00LjY2NDE1LDQuNjY0MTVoLTIxLjQ5MTNjLTIuNTc1MTMsLTAuMDAxMTMgLTQuNjYyMSwtMi4wODkwMiAtNC42NjIxLC00LjY2NDE1di0yMS40ODkyNGMwLjAwMTEzLC0yLjU3NTQ4IDIuMDg4NjcsLTQuNjYzMDIgNC42NjQxNSwtNC42NjQxNWgyMS40OTMzNmMxLjIzNjgsLTAuMDAwNTYgMi40MjMwNCwwLjQ5MDgxIDMuMjk3MiwxLjM2NTc0eiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMzA1LjM3NTMxLDE0MC40MDEwOWMwLjg3NDE3LDAuODc0OTQgMS4zNjQ0NiwyLjA2MTYgMS4zNjI4NCwzLjI5ODQydjIxLjQ4OTI0Yy0wLjAwMTEzLDIuNTc1NDggLTIuMDg4NjcsNC42NjMwMyAtNC42NjQxNSw0LjY2NDE1aC0yMS40OTEzYy0yLjU3NTEzLC0wLjAwMTEzIC00LjY2MjEsLTIuMDg5MDIgLTQuNjYyMSwtNC42NjQxNXYtMjEuNDg5MjRjMC4wMDExMywtMi41NzU0OCAyLjA4ODY3LC00LjY2MzAyIDQuNjY0MTUsLTQuNjY0MTVoMjEuNDkzMzZjMS4yMzY4LC0wLjAwMDU2IDIuNDIzMDQsMC40OTA4MSAzLjI5NzIsMS4zNjU3NHoiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTI3OS41OTc1MywxNDAuNDAxMDljMC44NzQxNywwLjg3NDk0IDEuMzY0NDYsMi4wNjE2IDEuMzYyODQsMy4yOTg0MnYyMS40ODkyNGMtMC4wMDExMywyLjU3NTQ4IC0yLjA4ODY3LDQuNjYzMDMgLTQuNjY0MTUsNC42NjQxNWgtMjEuNDkxM2MtMi41NzUxMywtMC4wMDExMyAtNC42NjIxLC0yLjA4OTAyIC00LjY2MjEsLTQuNjY0MTV2LTIxLjQ4OTI0YzAuMDAxMTMsLTIuNTc1NDggMi4wODg2NywtNC42NjMwMiA0LjY2NDE1LC00LjY2NDE1aDIxLjQ5MzM2YzEuMjM2OCwtMC4wMDA1NiAyLjQyMzA0LDAuNDkwODEgMy4yOTcyLDEuMzY1NzR6IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yNjYuODc3OTgsMTY5Ljg0Njl2LTU2LjU4MzMzaDIzLjEyNXY1Ni41ODMzM3oiIHN0cm9rZT0iIzY2MDBmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTMwNi43MzIxNCwxNTMuMTE3NzJoLTU2LjU4MzMzdi0yMy4xMjVoNTYuNTgzMzN6IiBzdHJva2U9IiM2NjAwZmYiIHN0cm9rZS13aWR0aD0iMCIvPjwvZz48Zz48cGF0aCBkPSJNMjAyLjcxNjU2LDExNC42MjMzNmMwLjg3NDE3LDAuODc0OTQgMS4zNjQ0NiwyLjA2MTYgMS4zNjI4NCwzLjI5ODQydjIxLjQ4OTI0Yy0wLjAwMTEzLDIuNTc1NDggLTIuMDg4NjcsNC42NjMwMyAtNC42NjQxNSw0LjY2NDE1aC0yMS40OTEzYy0yLjU3NTEzLC0wLjAwMTEzIC00LjY2MjEsLTIuMDg5MDIgLTQuNjYyMSwtNC42NjQxNXYtMjEuNDg5MjRjMC4wMDExMywtMi41NzU0OCAyLjA4ODY3LC00LjY2MzAyIDQuNjY0MTUsLTQuNjY0MTVoMjEuNDkzMzZjMS4yMzY4LC0wLjAwMDU2IDIuNDIzMDQsMC40OTA4MSAzLjI5NzIsMS4zNjU3NHoiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIyOC40OTQzNCwxMTQuNjIzMzdjMC44NzQxNywwLjg3NDk0IDEuMzY0NDYsMi4wNjE2IDEuMzYyODQsMy4yOTg0MnYyMS40ODkyNGMtMC4wMDExMywyLjU3NTQ4IC0yLjA4ODY3LDQuNjYzMDMgLTQuNjY0MTUsNC42NjQxNWgtMjEuNDkxM2MtMi41NzUxMywtMC4wMDExMyAtNC42NjIxLC0yLjA4OTAyIC00LjY2MjEsLTQuNjY0MTV2LTIxLjQ4OTI0YzAuMDAxMTMsLTIuNTc1NDggMi4wODg2NywtNC42NjMwMiA0LjY2NDE1LC00LjY2NDE1aDIxLjQ5MzM2YzEuMjM2OCwtMC4wMDA1NiAyLjQyMzA0LDAuNDkwODEgMy4yOTcyLDEuMzY1NzR6IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMjguNDk0MzUsMTIxLjY5MjhjMC44NzQxNywwLjg3NDk0IDEuMzY0NDYsMi4wNjE2IDEuMzYyODQsMy4yOTg0MnYyMS40ODkyNGMtMC4wMDExMywyLjU3NTQ4IC0yLjA4ODY3LDQuNjYzMDMgLTQuNjY0MTUsNC42NjQxNWgtMjEuNDkxM2MtMi41NzUxMywtMC4wMDExMyAtNC42NjIxLC0yLjA4OTAyIC00LjY2MjEsLTQuNjY0MTV2LTIxLjQ4OTI0YzAuMDAxMTMsLTIuNTc1NDggMi4wODg2NywtNC42NjMwMiA0LjY2NDE1LC00LjY2NDE1aDIxLjQ5MzM2YzEuMjM2OCwtMC4wMDA1NiAyLjQyMzA0LDAuNDkwODEgMy4yOTcyLDEuMzY1NzR6IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMDIuNzE2NTcsMTIxLjcwNjQxYzAuODc0MTcsMC44NzQ5NCAxLjM2NDQ2LDIuMDYxNiAxLjM2Mjg0LDMuMjk4NDJ2MjEuNDg5MjRjLTAuMDAxMTMsMi41NzU0OCAtMi4wODg2Nyw0LjY2MzAzIC00LjY2NDE1LDQuNjY0MTVoLTIxLjQ5MTNjLTIuNTc1MTMsLTAuMDAxMTMgLTQuNjYyMSwtMi4wODkwMiAtNC42NjIxLC00LjY2NDE1di0yMS40ODkyNGMwLjAwMTEzLC0yLjU3NTQ4IDIuMDg4NjcsLTQuNjYzMDIgNC42NjQxNSwtNC42NjQxNWgyMS40OTMzNmMxLjIzNjgsLTAuMDAwNTYgMi40MjMwNCwwLjQ5MDgxIDMuMjk3MiwxLjM2NTc0eiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjI5Ljg1MTE5LDE0My43NjQwMmgtNTYuNTgzMzN2LTIzLjEyNWg1Ni41ODMzM3oiIHN0cm9rZT0iIzY2MDBmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTE4OS45OTcwMiwxNTEuMTUwMzJ2LTM3Ljg5NzYxaDIzLjEyNXYzNy44OTc2MXoiIHN0cm9rZT0iIzY2MDBmZiIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMTIuNjc3MTI6MTEyLjY3NzM2NS0tPg==';

  const main_protocols = ['https:', 'http:', 'data:', 'file:', 'blob:', 'ftp:', 'ftps:', 'mailto:', 'news:', 'irc:', 'gopher:', 'nntp:', 'feed:', 'telnet:', 'mms:', 'rtsp:', 'svn:', 'tel:', 'fax:', 'xmpp:'];
  const browser_protocols = ['chrome:', 'edge:', 'brave:', 'browser:', 'about:', 'extension:', 'chrome-extension:'];
  const special_protocols = ['steam:', 'spotify:', 'zoommtg:', 'zoomus:', 'viber:', 'slack:', 'trueconf:', 'rdar:', 'msteams:', 'teamspeak:', 'magnet:', 'streamdeck:', 'skype:', 'sms:', 'comgooglemaps:', 'comgooglemapsurl:', 'comgooglemaps-x-callback:'];
  const ms_protocols = ['ms-help:', 'ms-settings', 'ms-settings-airplanemode:', 'ms-settings-bluetooth:', 'ms-settings-camera:', 'ms-settings-cellular:', 'ms-settings-cloudstorage:', 'ms-settings-emailandaccounts:', 'ms-settings-language:', 'ms-settings-location:', 'ms-settings-lock:', 'ms-settings-nfctransactions:', 'ms-settings-notifications:', 'ms-settings-power:', 'ms-settings-privacy:', 'ms-settings-proximity:', 'ms-settings-screenrotation:', 'ms-settings-wifi:', 'ms-settings-workplace:', 'ms-access:', 'ms-excel:', 'ms-infopath:', 'ms-powerpoint:', 'ms-project:', 'ms-publisher:', 'ms-spd:', 'ms-visio:', 'ms-word:', 'ms-clock:', 'ms-calculator:', 'ms-windows-store:'];
  const protocols = [...main_protocols, ...browser_protocols, ...special_protocols, ...ms_protocols];

  const fetch_url = ({USER_URL, BODY, CONTENT_TYPE, RESPONSES_TYPES, SPLIT}, METHOD) => {
    SPLIT = String(SPLIT);
    CONTENT_TYPE = Number(CONTENT_TYPE);
    RESPONSES_TYPES = String(RESPONSES_TYPES).split(' ').filter(word => word !== '').length >= 1 ? String(RESPONSES_TYPES).split(' ').filter(word => word !== '') : ['9'];
    let single = METHOD === 'GET' || METHOD === 'DELETE';
    return fetch(String(USER_URL), {
      method: METHOD,
      headers: single ? {} : {'Content-Type': CONTENT_TYPE === 1 ? 'text/plain' : 'application/json'},
      redirect: single ? 'follow' : 'follow',
      body: CONTENT_TYPE === 1 ? String(BODY) : JSON.stringify(BODY)})
    .then(res => {
      const responses = [];
      for (let i = 0; i <= RESPONSES_TYPES.length - 1; i++) {
        switch (Number(RESPONSES_TYPES[i])) {
          case 1: responses.push(res.text()); break;
          case 2: responses.push(JSON.stringify(res.json())); break;
          case 3: responses.push(String(res.ok)); break;
          case 4: responses.push(res.status); break;
          case 5: responses.push(res.statusText); break;
          case 6: responses.push(res.type); break;
          case 7: responses.push(String(res.redirected)); break;
          case 8: responses.push(res.url); break;
          case 9: default: responses.push(single ? res.url : String(res.bodyUsed)); break;
        }
      }
      return Promise.all(responses);
    })
    .then(arr => {
      let responses = '';
      for (let i = 0; i <= RESPONSES_TYPES.length - 1; i++) {
        responses += SPLIT + arr[i];
      }
      return SPLIT === '' ? responses : responses.slice(1);
    })
    .catch(err => '');
  };

  class Window {

    getInfo() {
      return {

        id: 'window',
        name: 'Window',

        color1: '#6600ff',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'connected_to_internet_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'connected to internet?'
          },
          '---',
          {
            opcode: 'browser_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'browser'
          },
          '---',
          {
            opcode: 'current_url_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'current url'
          },
          '---',
          {
            opcode: 'network_type_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'network type'
          },
          {
            opcode: 'network_generation_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'network generation'
          },
          '---',
          {
            opcode: 'downlink_speed_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'downlink speed in mb/s'
          },
          {
            opcode: 'downlink_max_speed_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'downlink max speed in mb/s'
          },
          {
            opcode: 'rtt_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'rtt in ms'
          },
          '---',
          {
            opcode: 'get_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [USER_URL] respond [RESPONSES_TYPES] split by [SPLIT]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/get'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'only_url_response_type'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              }
            }
          },
          {
            opcode: 'delete_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'delete [USER_URL] respond [RESPONSES_TYPES] split by [SPLIT]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/delete'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'only_url_response_type'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              }
            }
          },
          {
            opcode: 'post_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'post [CONTENT_TYPE] [BODY] to [USER_URL] respond [RESPONSES_TYPES] split by [SPLIT]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/post'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              CONTENT_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'content_type'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'response_type'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              }
            }
          },
          {
            opcode: 'put_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'put [CONTENT_TYPE] [BODY] to [USER_URL] respond [RESPONSES_TYPES] split by [SPLIT]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/put'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              CONTENT_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'content_type'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'response_type'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              }
            }
          },
          {
            opcode: 'patch_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'patch [CONTENT_TYPE] [BODY] to [USER_URL] respond [RESPONSES_TYPES] split by [SPLIT]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/patch'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              CONTENT_TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'content_type'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'response_type'
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ' '
              }
            }
          },
          '---',
          {
            opcode: 'open_link_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open [USER_URL] in new tab',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org'
              }
            }
          },
          {
            opcode: 'open_window_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open [USER_URL] in new window with width: [WIDTH] height: [HEIGHT] left: [LEFT] top: [TOP]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org'
              },
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'default'
              },
              HEIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'default'
              },
              LEFT: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'default'
              },
              TOP: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'default'
              }
            }
          },
          {
            opcode: 'redirect_link_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'redirect this tab to [USER_URL]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org'
              }
            }
          }
        ],

        menus: {
          content_type: { 
            acceptReporters: true,
            items: [
              {
                text: '(1) text',
                value: '1'
              },
              {
                text: '(2) json',
                value: '2'
              }
            ]
          },
          only_url_response_type: {  
            acceptReporters: true,
            items: [
              {
                text: '(1) text',
                value: '1'
              },
              {
                text: '(2) json',
                value: '2'
              },
              {
                text: '(3) status ok?',
                value: '3'
              },
              {
                text: '(4) status',
                value: '4'
              },
              {
                text: '(5) status text',
                value: '5'
              },
              {
                text: '(5 1) status text and text',
                value: '5 1'
              },
              {
                text: '(6) type',
                value: '6'
              },
              {
                text: '(6 4) type and status',
                value: '6 4'
              },
              {
                text: '(7) redirected?',
                value: '7'
              },
              {
                text: '(8) url',
                value: '8'
              }
            ]
          },
          response_type: {  
            acceptReporters: true,
            items: [
              {
                text: '(1) text',
                value: '1'
              },
              {
                text: '(2) json',
                value: '2'
              },
              {
                text: '(3) status ok?',
                value: '3'
              },
              {
                text: '(4) status',
                value: '4'
              },
              {
                text: '(5) status text',
                value: '5'
              },
              {
                text: '(5 1) status text and text',
                value: '5 1'
              },
              {
                text: '(6) type',
                value: '6'
              },
              {
                text: '(6 4) type and status',
                value: '6 4'
              },
              {
                text: '(7) redirected?',
                value: '7'
              },
              {
                text: '(8) url',
                value: '8'
              },
              {
                text: '(9) body used?',
                value: '9'
              }
            ]
          },
          default: { 
            acceptReporters: true,
            items: [
              {
                text: 'default',
                value: 'default'
              }
            ]
          }
        }
      }
    }

    connected_to_internet_block() {
      try {return navigator.onLine} catch(err) {return false}
    }
    browser_block() {
      try {
        let has = input => navigator.userAgent.includes(input);
        if (has('Firefox')) return 'firefox';
        if (has('SamsungBrowser')) return 'samsung internet';
        if ((has('Opera') || has('OPR')) && has('GX')) return 'opera gx';
        if (has('Opera') || has('OPR')) return 'opera';
        if (has('Trident')) return 'internet explorer';
        if (has('Edge')) return 'legacy';
        if (has('Edg')) return 'edge';
        if (has('YaBrowser') || has('YaSearchBrowser')) return 'yandex';
        if (has('Miui')) return 'mi browser';
        if (has('UBrowser')) return 'uc browser';
        if (has('Chrome')) return 'chromium';
        if (has('Safari')) return 'safari';
        return '';
      } catch(err) {return ''}
    }
    current_url_block() {
      try {return document.URL || ''} catch(err) {return ''}
    }
    network_type_block() {
      try {
        switch (navigator.connection.type) {
          case 'bluetooth': return 'bluetooth';
          case 'cellular': return 'cellular';
          case 'ethernet': return 'ethernet';
          case 'wifi': return 'wi-fi';
          case 'wimax': return 'wimax';
          default: return '';
        }
      } catch(err) {return ''}
    }
    network_generation_block() {
      try {
        switch (navigator.connection.effectiveType) {
          case 'slow-2g': case '2g': return '2g';
          case '3g': return '3g';
          case '4g': return '4g';
          default: return '';
        }
      } catch(err) {return ''}
    }
    downlink_speed_block() {
      try {return navigator.connection.downlink || ''} catch(err) {return ''}
    }
    downlink_max_speed_block() {
      try {return navigator.connection.downlinkMax || ''} catch(err) {return ''}
    }
    rtt_block() {
      try {return navigator.connection.rtt || ''} catch(err) {return ''}
    }
    get_block(args) {
      try {return fetch_url(args, 'GET')} catch(err) {return ''}
    }
    delete_block(args) {
      try {return fetch_url(args, 'DELETE')} catch(err) {return ''}
    }
    post_block(args) {
      try {return fetch_url(args, 'POST')} catch(err) {return ''}
    }
    put_block(args) {
      try {return fetch_url(args, 'PUT')} catch(err) {return ''}
    }
    patch_block(args) {
      try {return fetch_url(args, 'PATCH')} catch(err) {return ''}
    }
    open_link_block({USER_URL}) {
      try {
        const url = new URL(String(USER_URL));
        if (protocols.includes(url.protocol)) {
          window.open(String(USER_URL), '_blank');
        }
      } catch(err) {}
    }
    open_window_block({USER_URL,WIDTH,HEIGHT,LEFT,TOP}) {
      try {
        const url = new URL(String(USER_URL));
        if (protocols.includes(url.protocol)) {
          let params = 'popup=1';
          params += isNaN(WIDTH) ? '' : `,width=${Number(WIDTH) < 100 ? 100 : Number(WIDTH) > window.screen.width ? window.screen.width : Number(WIDTH)}`;
          params += isNaN(HEIGHT) ? '' : `,height=${Number(HEIGHT) < 100 ? 100 : Number(HEIGHT) > window.screen.height ? window.screen.height : Number(HEIGHT)}`;
          params += isNaN(LEFT) ? '' : `,left=${Number(LEFT) < 0 ? 0 : Number(LEFT) > window.screen.width ? window.screen.width : Number(LEFT)}`;
          params += isNaN(TOP) ? '' : `,top=${Number(TOP) < 0 ? 0 : Number(TOP) > window.screen.height ? window.screen.height : Number(TOP)}`;
          window.open(String(USER_URL), '_blank', params);
        }
      } catch(err) {}
    }
    redirect_link_block({USER_URL}) {
      try {
        const url = new URL(String(USER_URL));
        if (protocols.includes(url.protocol)) {
          window.open(String(USER_URL), '_self');
        }
      } catch(err) {}
    }
  }

  Scratch.extensions.register(new Window());
})(Scratch);
