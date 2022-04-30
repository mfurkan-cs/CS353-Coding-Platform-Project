import React, { useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import ContestInfoDonation from "../components/ContestInfoDonation";
import NavbarUser from "../components/Navbars/NavbarUser";

export const CompanyMainScreen = () => {
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [totalPagesUpcoming, setTotalPagesUpcoming] = useState(1);
  const [curUpcomingContests, setUpcomingCurContests] = useState([]);
  const [upcomingContests, setUpcomingContests] = useState([
    {
      contest_id: "C1",
      contest_name: "Coding Contest 1",
      contest_photo: "https://picsum.photos/200",
      start_date: "12/06/2022",
      end_date: "18/06/2022",
      prize: "10000$",
      creation_date: "21/04/2022",
      donated_amount: 0,
    },
    {
      contest_id: "C2",
      contest_name: "Coding Contest 2",
      contest_photo: "https://picsum.photos/200",
      start_date: "14/06/2022",
      end_date: "20/06/2022",
      prize: "13000$",
      creation_date: "21/04/2022",
      donated_amount: 10300,
    },
    {
      contest_id: "C3",
      contest_name: "Coding Contest 3",
      contest_photo: "https://picsum.photos/200",
      start_date: "25/07/2022",
      end_date: "18/08/2022",
      prize: "Free Space Trip",
      creation_date: "21/04/2022",
      donated_amount: 0,
    },
    {
      contest_id: "C4",
      contest_name: "Coding Contest 4",
      contest_photo: "https://picsum.photos/200",
      start_date: "12/02/2022",
      end_date: "18/02/2022",
      prize: "Amazon web services: 5000$",
      creation_date: "21/04/2022",
      donated_amount: 0,
    },
    {
      contest_id: "C5",
      contest_name: "Coding Contest 5",
      contest_photo: "https://picsum.photos/200",
      start_date: "31/07/2022",
      end_date: "03/08/2022",
      prize: "Mercedes A180 AMG Sport",
      creation_date: "21/04/2022",
      donated_amount: 10000,
    },
    {
      contest_id: "C6",
      contest_name: "Coding Contest 5",
      contest_photo: "https://picsum.photos/200",
      start_date: "31/07/2022",
      end_date: "03/08/2022",
      prize: "Mercedes A180 AMG Sport",
      creation_date: "21/04/2022",
      donated_amount: 2000,
    },
    {
      contest_id: "C7",
      contest_name: "Coding Contest 5",
      contest_photo: "https://picsum.photos/200",
      start_date: "31/07/2022",
      end_date: "03/08/2022",
      prize: "Mercedes A180 AMG Sport",
      creation_date: "21/04/2022",
      donated_amount: 1400,
    },
    {
      contest_id: "C8",
      contest_name: "Coding Contest 5",
      contest_photo: "https://picsum.photos/200",
      start_date: "31/07/2022",
      end_date: "03/08/2022",
      prize: "Mercedes A180 AMG Sport",
      creation_date: "21/04/2022",
      donated_amount: 0,
    },
  ]);

  const [interviews, setInterviews] = useState([
    {
      interview_id: "I1",
      interview_name: "Interview 1",
      interview_date: "12/06/2022",
      interview_duration: 2,
    },
    {
      interview_id: "I2",
      interview_name: "Interview 2",
      interview_date: "14/06/2022",
      interview_duration: 2,
    },
    {
      interview_id: "I3",
      interview_name: "Interview 3",
      interview_date: "25/07/2022",
      interview_duration: 2,
    },
    {
      interview_id: "I4",
      interview_name: "Interview 4",
      interview_date: "12/02/2022",
      interview_duration: 2,
    },
    {
      interview_id: "I5",
      interview_name: "Interview 5",
      interview_date: "31/07/2022",
      interview_duration: 2,
    },
    {
      interview_id: "I6",
      interview_name: "Interview 6",
      interview_date: "31/07/2022",
      interview_duration: 2,
    },
    {
      interview_id: "I7",
      interview_name: "Interview 7",
      interview_date: "31/07/2022",
      interview_duration: 2,
    },
    {
      interview_id: "I8",
      interview_name: "Interview 8",
      interview_date: "31/07/2022",
      interview_duration: 2,
    },
    {
      interview_id: "I9",
      interview_name: "Interview 9",
      interview_date: "31/10/2022",
      interview_duration: 3,
    },
  ]);
  useEffect(() => {
    setTotalPagesUpcoming(Math.ceil(upcomingContests.length / 5));
    setUpcomingCurContests(upcomingContests.slice(0, 5));
  }, []);

  useEffect(() => {
    setUpcomingCurContests(
      upcomingContests.slice((upcomingPage - 1) * 5, 5 * upcomingPage)
    );
  }, [upcomingPage]);

  function sortContets() {
    const sortedData = [...upcomingContests].sort((a) => {
      return a.donated_amount === 0 ? 1 : -1;
    });
    setUpcomingContests(sortedData);
    setUpcomingCurContests(
      sortedData.slice((upcomingPage - 1) * 5, 5 * upcomingPage)
    );
  }

  useEffect(() => {
    sortContets();
  }, []);

  return (
    <div>
      <NavbarUser />
      <div
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingBottom: "20px",
          marginTop: "10px",
          height: "90vh",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <h1>Upcoming Contests</h1>
            {curUpcomingContests.map((contest, index) => (
              <div
                key={index}
                style={{ paddingRight: "40px", marginBottom: "10px" }}
              >
                <ContestInfoDonation
                  contest_id={contest.contest_id}
                  contest_name={contest.contest_name}
                  contest_photo={contest.contest_photo}
                  start_date={contest.start_date}
                  end_date={contest.end_date}
                  prize={contest.prize}
                  creation_date={contest.creation_date}
                  donated_amount={contest.donated_amount}
                  style={{ marginTop: "20px" }}
                />
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                count={totalPagesUpcoming}
                page={upcomingPage}
                onChange={(e, page) => setUpcomingPage(page)}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <h1>Your Interviews</h1>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CompanyMainScreen;