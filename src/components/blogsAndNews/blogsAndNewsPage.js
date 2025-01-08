import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Pagination, Box } from '@mui/material';
import FeaturedBlog from './FeaturedBlog';
import mockData from './mock';
import BlogCard from './BlogCard';

function TestNews() {
    const [page, setPage] = useState(1);
    const blogsPerPage = 6;

    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo({
            top: 800,
            behavior: 'smooth',
        });
    };

    const displayedBlogs = mockData.slice(
        (page - 1) * blogsPerPage,
        page * blogsPerPage
    );


    return (
        <Container

        >
            <Typography align="center"
                sx={{
                    fontSize: {
                        lg: "57px",
                        md: "57px",
                        sm: "33px",
                        xs: "33px",
                    },
                    fontFamily: "var(--font-family)",
                    color: "#051A2F",
                    marginTop: {
                        lg: "165px",
                        md: "100px",
                        sm: "81px",
                        xs: "81px"
                    }
                }}
            >
                Blog & News
            </Typography>
            <Typography
                sx={{
                    fontSize: {
                        lg: "21px",
                        md: "21px",
                        sm: "14px",
                        xs: "14px",
                    },
                    fontFamily: "var(--font-family)",
                    color: "#051A2F",
                    paddingBottom: {
                        lg: "52px",
                        md: "52px",
                        sm: "40px",
                        xs: "40px"
                    },
                    maxWidth: "750px",
                    display: "flex",
                    margin: "0 auto",
                    textAlign: "center"

                }}
            >
                Lorem is simply dummy text of the printing and typesgalley of type and scrambled it to make a type specimen book.
            </Typography>
            <FeaturedBlog blog={mockData[0]} />

            <Grid container spacing={4} sx={{ mt: 4 }}>
                {displayedBlogs.map((blog, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <BlogCard blog={blog} />
                    </Grid>
                ))}
            </Grid>

            <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                <Pagination

                    count={Math.ceil(mockData.length / blogsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    sx={{
                        padding: {
                            lg: "58px 0px 90px 0px",
                            md: "58px 0px 90px 0px",
                            sm: "18px 0px 62px 0px",
                            xs: "18px 0px 62px 0px",
                        },

                        '& .MuiPaginationItem-previousNext': {
                            color: '#051A2F',
                            backgroundColor: 'transparent',
                            borderRadius: '50%',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                            scale: "2"

                        },
                        '& .MuiPaginationItem-page': {
                            color: '#051A2F',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '50%',
                            fontSize: {
                                lg: "24px",
                                md: "24px",
                                sm: "20px",
                                xs: "20px"
                            },
                            fontFamily: "var(--font-family)",

                            '&:hover': {
                                backgroundColor: '#f1f1f1',
                            },
                        },
                        '& .MuiPaginationItem-page.Mui-selected': {
                            color: '#fff',
                            backgroundColor: '#051A2F',
                        },
                    }}
                    color="primary"
                />
            </Box>
        </Container>
    );
}

export default TestNews;
