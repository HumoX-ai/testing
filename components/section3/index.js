import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Swiper3 from "./Swiper3";
import Image from "next/image";

export default function Section3() {
  return (
    <Container maxWidth="xxl">
      <Typography sx={{ textAlign: "center", pt: 7, pb: 3 }} variant="h3">
        Our partners
      </Typography>
      <Swiper3 />
      <Box
        sx={{
          backgroundColor: "#F5F7F9",
          width: "100%",
          mt: 7,
          p: 5,
          borderRadius: 10,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item sm={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, textAlign: "center" }}
            >
              Bizning jamoaga qo`shilish niyatiz bormi
            </Typography>
            <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
              With the advancement of technology, the focus of User interfaces
              has shifted from usage to look and feel to stand-out interfaces.
              It’s affecting the way we engage with others
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box>
              <TextField
                sx={{ pb: 1 }}
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <Box sx={{ display: { sm: "block", md: "flex" }, gap: 1 }}>
                <TextField
                  sx={{ pb: 1 }}
                  fullWidth
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                />
                <TextField
                  sx={{ pb: 1 }}
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Box>
              <Button fullWidth variant="contained" color="error" sx={{ p: 1 }}>
                Send your information
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid
        sx={{ mt: 8, textAlign: "center" }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ display: "flex", mb: 1, justifyContent: "center" }}>
            <Image
              style={{ objectFit: "cover" }}
              src={require("../../assets/logo.png")}
              width={40}
              height={40}
              alt=""
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              REIWA
            </Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
            Toshkent shahri, Yunusobod tumani, Niyozbek yo`li
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Navigations
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Result
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Document
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Social media
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Telegram
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Instagram
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Facebooks
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Twitter
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Contacts
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Admin: +998 99 432-00-88
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Support: ++998 93 603-16-16
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" sx={{ mt: 5, fontWeight: 800 }}>
        Copyright 2022 Mars Team Tech
      </Typography>
    </Container>
  );
}
