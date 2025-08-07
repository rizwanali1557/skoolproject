"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box, Container, LinearProgress } from "@mui/material";
import style from "../../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
function TabsData() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const cardsData = [
    {
      id: 1,
      title: "START HERE",
      image:
        "/assests/images/29888546bf50497794b1ea3d51fb4197583e78dba0214d23872b809d0e1c6398.jpeg",
      content:
        "Your ultimate guide to navigating the Brotherhood of Scent and leveling-up.",
    },
    {
      id: 2,
      title: "MUST READ",
      image:
        "/assests/images/070d284dada648548e7182056952fcbe69a7dde475be4736bf934ac9aea67d72.jpeg",
      content:
        "Follow our community guidelines to prevent being banned from the group",
    },
    {
      id: 3,
      title: "How To Find Your Signature Scent",
      image:
        "/assests/images/ecf1f4db6c91473ea6204b1ceb8552949985cc0f54c5495bba9709b5ddd843b3.jpeg",
      content:
        "Discover and learn how to choose your invisible power - the signature scent.",
      icon: (
        <svg
          viewBox="0 0 31 40"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7619 13.3333H26.6667C28.7619 13.3333 30.4762 15.0476 30.4762 17.1429V36.1905C30.4762 38.2857 28.7619 40 26.6667 40H3.80952C1.71429 40 0 38.2857 0 36.1905V17.1429C0 15.0476 1.71429 13.3333 3.80952 13.3333H5.71429V9.52381C5.71429 4.26667 9.98095 0 15.2381 0C20.4952 0 24.7619 4.26667 24.7619 9.52381V13.3333ZM15.2379 3.80951C12.076 3.80951 9.52362 6.36189 9.52362 9.5238V13.3333H20.9522V9.5238C20.9522 6.36189 18.3998 3.80951 15.2379 3.80951ZM26.6669 36.1905H3.80971V17.1428H26.6669V36.1905ZM19.0476 26.6667C19.0476 28.7619 17.3333 30.4762 15.2381 30.4762C13.1429 30.4762 11.4286 28.7619 11.4286 26.6667C11.4286 24.5714 13.1429 22.8572 15.2381 22.8572C17.3333 22.8572 19.0476 24.5714 19.0476 26.6667Z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "How To Win Prizes & Level Up",
      content:
        "14 tips to level up and reach the top of the mountain in Brotherhood of Scent.",
      image:
        "/assests/images/0c6c8fafdfa247579105680530f08ed414e51d78503345afae9fa5dd5f8650eb.jpeg",
    },
    {
      id: 5,
      title: "Manage Notifications",
      image:
        "/assests/images/fded7b4956594885a0a3414ed3732ce88d7b7ae8cdcc45cc88ee0d2f9c4c27ef.jpeg",
      content:
        "Accessing and changing notifications in Skool is easy and essential for staying updated.",
    },
    {
      id: 6,
      title: "Fragrance 101 - Intro Course",
      image:
        "/assests/images/70d393d94e7a449c943ca318145fa8b25937885288ee4b59a60e36f2c1597d17.jpeg",
      content:
        "Master all of the essentials and foundations of scent in this Microcourse.",
         icon: (
        <svg
          viewBox="0 0 31 40"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7619 13.3333H26.6667C28.7619 13.3333 30.4762 15.0476 30.4762 17.1429V36.1905C30.4762 38.2857 28.7619 40 26.6667 40H3.80952C1.71429 40 0 38.2857 0 36.1905V17.1429C0 15.0476 1.71429 13.3333 3.80952 13.3333H5.71429V9.52381C5.71429 4.26667 9.98095 0 15.2381 0C20.4952 0 24.7619 4.26667 24.7619 9.52381V13.3333ZM15.2379 3.80951C12.076 3.80951 9.52362 6.36189 9.52362 9.5238V13.3333H20.9522V9.5238C20.9522 6.36189 18.3998 3.80951 15.2379 3.80951ZM26.6669 36.1905H3.80971V17.1428H26.6669V36.1905ZM19.0476 26.6667C19.0476 28.7619 17.3333 30.4762 15.2381 30.4762C13.1429 30.4762 11.4286 28.7619 11.4286 26.6667C11.4286 24.5714 13.1429 22.8572 15.2381 22.8572C17.3333 22.8572 19.0476 24.5714 19.0476 26.6667Z"
          />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Visual Guide to Fragrance Houses Pt...",
      image:
        "/assests/images/cac9d575d4c7432f8db2fb9c058327cfd4114df3cd5e407195e4a4fed2ac8f8f.jpeg",
      content:
        "This is designed to help new Fragrance Enthusiasts in identifying the more widely",
         icon: (
        <svg
          viewBox="0 0 31 40"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7619 13.3333H26.6667C28.7619 13.3333 30.4762 15.0476 30.4762 17.1429V36.1905C30.4762 38.2857 28.7619 40 26.6667 40H3.80952C1.71429 40 0 38.2857 0 36.1905V17.1429C0 15.0476 1.71429 13.3333 3.80952 13.3333H5.71429V9.52381C5.71429 4.26667 9.98095 0 15.2381 0C20.4952 0 24.7619 4.26667 24.7619 9.52381V13.3333ZM15.2379 3.80951C12.076 3.80951 9.52362 6.36189 9.52362 9.5238V13.3333H20.9522V9.5238C20.9522 6.36189 18.3998 3.80951 15.2379 3.80951ZM26.6669 36.1905H3.80971V17.1428H26.6669V36.1905ZM19.0476 26.6667C19.0476 28.7619 17.3333 30.4762 15.2381 30.4762C13.1429 30.4762 11.4286 28.7619 11.4286 26.6667C11.4286 24.5714 13.1429 22.8572 15.2381 22.8572C17.3333 22.8572 19.0476 24.5714 19.0476 26.6667Z"
          />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Scent Conditioning 101",
      image:
        "/assests/images/b601acf4cbf346eaba7b96e6227f0b0068039e2023ea4b3eb24d3e68b6cecf9c.jpeg",
      content:
        "Unlock Success with Scent: Master the art of fragrance for increased charm and success.",
         icon: (
        <svg
          viewBox="0 0 31 40"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7619 13.3333H26.6667C28.7619 13.3333 30.4762 15.0476 30.4762 17.1429V36.1905C30.4762 38.2857 28.7619 40 26.6667 40H3.80952C1.71429 40 0 38.2857 0 36.1905V17.1429C0 15.0476 1.71429 13.3333 3.80952 13.3333H5.71429V9.52381C5.71429 4.26667 9.98095 0 15.2381 0C20.4952 0 24.7619 4.26667 24.7619 9.52381V13.3333ZM15.2379 3.80951C12.076 3.80951 9.52362 6.36189 9.52362 9.5238V13.3333H20.9522V9.5238C20.9522 6.36189 18.3998 3.80951 15.2379 3.80951ZM26.6669 36.1905H3.80971V17.1428H26.6669V36.1905ZM19.0476 26.6667C19.0476 28.7619 17.3333 30.4762 15.2381 30.4762C13.1429 30.4762 11.4286 28.7619 11.4286 26.6667C11.4286 24.5714 13.1429 22.8572 15.2381 22.8572C17.3333 22.8572 19.0476 24.5714 19.0476 26.6667Z"
          />
        </svg>
      ),
    },
    {
      id: 9,
      title: "Ultimate 'How To Buy' Guide",
      image:
        "/assests/images/1350f97973634b1c9c3d8c107f214f6ae20facdfff6044bba848154c4dba407b.jpeg",
      content:
        "Master the tips & tricks of buying a fragrance like a true Frag Head.",
         icon: (
        <svg
          viewBox="0 0 31 40"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7619 13.3333H26.6667C28.7619 13.3333 30.4762 15.0476 30.4762 17.1429V36.1905C30.4762 38.2857 28.7619 40 26.6667 40H3.80952C1.71429 40 0 38.2857 0 36.1905V17.1429C0 15.0476 1.71429 13.3333 3.80952 13.3333H5.71429V9.52381C5.71429 4.26667 9.98095 0 15.2381 0C20.4952 0 24.7619 4.26667 24.7619 9.52381V13.3333ZM15.2379 3.80951C12.076 3.80951 9.52362 6.36189 9.52362 9.5238V13.3333H20.9522V9.5238C20.9522 6.36189 18.3998 3.80951 15.2379 3.80951ZM26.6669 36.1905H3.80971V17.1428H26.6669V36.1905ZM19.0476 26.6667C19.0476 28.7619 17.3333 30.4762 15.2381 30.4762C13.1429 30.4762 11.4286 28.7619 11.4286 26.6667C11.4286 24.5714 13.1429 22.8572 15.2381 22.8572C17.3333 22.8572 19.0476 24.5714 19.0476 26.6667Z"
          />
        </svg>
      ),
    },
    {
      id: 10,
      title: "Trusted Fragrance Dealers",
      image:
        "/assests/images/7af5acfba904457290a5b8f70c287683f476cd7f33fe4216adbb40c7f439fc4b.jpeg",
      content: "A list of our favorite fragrance dealers for you",
       icon: (
        <svg
          viewBox="0 0 31 40"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7619 13.3333H26.6667C28.7619 13.3333 30.4762 15.0476 30.4762 17.1429V36.1905C30.4762 38.2857 28.7619 40 26.6667 40H3.80952C1.71429 40 0 38.2857 0 36.1905V17.1429C0 15.0476 1.71429 13.3333 3.80952 13.3333H5.71429V9.52381C5.71429 4.26667 9.98095 0 15.2381 0C20.4952 0 24.7619 4.26667 24.7619 9.52381V13.3333ZM15.2379 3.80951C12.076 3.80951 9.52362 6.36189 9.52362 9.5238V13.3333H20.9522V9.5238C20.9522 6.36189 18.3998 3.80951 15.2379 3.80951ZM26.6669 36.1905H3.80971V17.1428H26.6669V36.1905ZM19.0476 26.6667C19.0476 28.7619 17.3333 30.4762 15.2381 30.4762C13.1429 30.4762 11.4286 28.7619 11.4286 26.6667C11.4286 24.5714 13.1429 22.8572 15.2381 22.8572C17.3333 22.8572 19.0476 24.5714 19.0476 26.6667Z"
          />
        </svg>
      ),
    },
    {
      id: 11,
      title: "Fragrance Giveaway Eligible",
      image:
        "/assests/images/59baa09882654f539ae47035995faed1132a986336e04ea69b240682e218f822.jpeg",
      content:
        "Unique chance to win a fragrance from Antonio's personal collection.",
         icon: (
        <svg
          viewBox="0 0 31 40"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7619 13.3333H26.6667C28.7619 13.3333 30.4762 15.0476 30.4762 17.1429V36.1905C30.4762 38.2857 28.7619 40 26.6667 40H3.80952C1.71429 40 0 38.2857 0 36.1905V17.1429C0 15.0476 1.71429 13.3333 3.80952 13.3333H5.71429V9.52381C5.71429 4.26667 9.98095 0 15.2381 0C20.4952 0 24.7619 4.26667 24.7619 9.52381V13.3333ZM15.2379 3.80951C12.076 3.80951 9.52362 6.36189 9.52362 9.5238V13.3333H20.9522V9.5238C20.9522 6.36189 18.3998 3.80951 15.2379 3.80951ZM26.6669 36.1905H3.80971V17.1428H26.6669V36.1905ZM19.0476 26.6667C19.0476 28.7619 17.3333 30.4762 15.2381 30.4762C13.1429 30.4762 11.4286 28.7619 11.4286 26.6667C11.4286 24.5714 13.1429 22.8572 15.2381 22.8572C17.3333 22.8572 19.0476 24.5714 19.0476 26.6667Z"
          />
        </svg>
      ),
    },
    {
      id: 12,
      title: "Free Bottle From Antonio's Personal...",
      image:
        "/assests/images/fa51c145b5e94087a9bf03bb274bb3330cc113fd26004f56845e4f631f74cd38.jpeg",
      content:
        "You did it! Follow the instructions in the course and get a FREE bottle from Antonio's",
         icon: (
        <svg
          viewBox="0 0 31 40"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7619 13.3333H26.6667C28.7619 13.3333 30.4762 15.0476 30.4762 17.1429V36.1905C30.4762 38.2857 28.7619 40 26.6667 40H3.80952C1.71429 40 0 38.2857 0 36.1905V17.1429C0 15.0476 1.71429 13.3333 3.80952 13.3333H5.71429V9.52381C5.71429 4.26667 9.98095 0 15.2381 0C20.4952 0 24.7619 4.26667 24.7619 9.52381V13.3333ZM15.2379 3.80951C12.076 3.80951 9.52362 6.36189 9.52362 9.5238V13.3333H20.9522V9.5238C20.9522 6.36189 18.3998 3.80951 15.2379 3.80951ZM26.6669 36.1905H3.80971V17.1428H26.6669V36.1905ZM19.0476 26.6667C19.0476 28.7619 17.3333 30.4762 15.2381 30.4762C13.1429 30.4762 11.4286 28.7619 11.4286 26.6667C11.4286 24.5714 13.1429 22.8572 15.2381 22.8572C17.3333 22.8572 19.0476 24.5714 19.0476 26.6667Z"
          />
        </svg>
      ),
    },
    {
      id: 13,
      title: "Get Your Challenge Coin ($25 Value)...",
      image:
        "/assests/images/e39c0a6d033c46e4807000bff1ca5b2e2391049062ec49ab90168d62cd477435.jpeg",
      content: "Unlock to claim your exclusive Challenge Coin.",
       icon: (
        <svg
          viewBox="0 0 31 40"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7619 13.3333H26.6667C28.7619 13.3333 30.4762 15.0476 30.4762 17.1429V36.1905C30.4762 38.2857 28.7619 40 26.6667 40H3.80952C1.71429 40 0 38.2857 0 36.1905V17.1429C0 15.0476 1.71429 13.3333 3.80952 13.3333H5.71429V9.52381C5.71429 4.26667 9.98095 0 15.2381 0C20.4952 0 24.7619 4.26667 24.7619 9.52381V13.3333ZM15.2379 3.80951C12.076 3.80951 9.52362 6.36189 9.52362 9.5238V13.3333H20.9522V9.5238C20.9522 6.36189 18.3998 3.80951 15.2379 3.80951ZM26.6669 36.1905H3.80971V17.1428H26.6669V36.1905ZM19.0476 26.6667C19.0476 28.7619 17.3333 30.4762 15.2381 30.4762C13.1429 30.4762 11.4286 28.7619 11.4286 26.6667C11.4286 24.5714 13.1429 22.8572 15.2381 22.8572C17.3333 22.8572 19.0476 24.5714 19.0476 26.6667Z"
          />
        </svg>
      ),
    },
  ];
  const tabs = [
    "Community",
    "Classroom",
    "Calendar",
    "Members",
    "Map",
    "Leaderboards",
    "About",
  ];
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={style.tabsNavConatiner}>
        <div className={style.tabsContain}>
          {/* Tab Buttons */}
          <Tabs value={value} onChange={handleChange} centered>
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab} />
            ))}
          </Tabs>
        </div>
      </div>
      <div className={style.tabsContentContain}>
        {value === 0 && <div>🏠 Community Content</div>}
        {value === 1 && (
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {cardsData.map((card,index) => (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                  <Link href="#">
                  <Card
                    sx={{
                      maxWidth: 350,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={card.image}
                        alt={card.title}
                      />

                      {(index === 2 || index === 5 || index === 6  || index === 7  || index === 8  || index === 9  || index === 10  || index === 11  || index === 12) && (
                        <Box className="overlay-icon">{card.icon}
                      </Box>
                      )}
                    </Box>
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box>
                        <Typography gutterBottom variant="h6" component="div">
                          {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {card.content}
                        </Typography>
                      </Box>

                      <Box sx={{ position: "relative", mt: "auto", ml: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={100}
                          sx={{
                            height: 25,
                            borderRadius: 6,
                            backgroundColor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#e4e4e4",
                            },
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 10,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            color: "#000",
                            fontSize: "15px",
                            fontWeight: "600",
                          }}
                        >
                          0%
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
        {value === 2 && <div>📅 Calendar Content</div>}
        {value === 3 && <div>🗺️ Map Content</div>}
        {value === 4 && <div>📌 CalenLeaderboards Content</div>}
        {value === 5 && <div>🏆 Leaderboards Content</div>}
      </div>
    </>
  );
}

export default TabsData;
