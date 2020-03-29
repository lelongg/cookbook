import React from "react";
import { Recipe } from "../services/RecipeService";
import {
  Fab,
  Card,
  CardContent,
  Typography,
  CardMedia,
  styled,
  Paper,
  Link as MuiLink,
  Box
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { getIssuesLink } from "../services/GithubService";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

const Root = styled("div")({
  minHeight: "100vh"
});

const Hero = styled("div")({
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "50vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "10vh"
});

const HeroTitle = styled(props => (
  <Typography align="center" variant="h2" {...props} />
))(({ theme }) => ({
  color: theme.palette.common.white,
  textShadow: "1px 1px #000",
  [theme.breakpoints.only("xs")]: {
    fontSize: "2rem"
  }
}));

const RecipesContainer = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(0, 4),
  transform: "translateY(-10vh)",
  display: "grid",
  padding: theme.spacing(2),
  gridColumnGap: theme.spacing(2),
  gridRowGap: theme.spacing(2),
  gridAutoRows: "max-content",
  [theme.breakpoints.only("xs")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
    margin: theme.spacing(0),
    padding: theme.spacing(1),
    boxShadow: "none"
  },
  [theme.breakpoints.only("sm")]: {
    gridTemplateColumns: "repeat(3, 1fr)"
  },
  [theme.breakpoints.only("md")]: {
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(5, 1fr)"
  }
}));

const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  [theme.breakpoints.only("xs")]: {
    height: 200
  },
  [theme.breakpoints.only("sm")]: {
    height: 200
  },
  [theme.breakpoints.only("md")]: {
    height: 200
  },
  [theme.breakpoints.up("lg")]: {
    height: 300
  }
}));

const AddFab = styled(props => (
  <Fab component="a" color="primary" {...props} />
))(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2)
}));

interface Props {
  recipes: Recipe[];
}

export default function Home({ recipes }: Props) {
  return (
    <Root>
      <Hero>
        <HeroTitle>{process.env.REACT_APP_TITLE}</HeroTitle>
      </Hero>
      <RecipesContainer>
        {recipes.map(recipe => (
          <Link to={`/recettes/${recipe.id}`}>
            <Card variant="outlined">
              <CustomCardMedia image={recipe.image} />
              <CardContent>
                <Typography variant="body2" component="p">
                  {recipe.name}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </RecipesContainer>
      <Box mb={4}>
        <Typography variant="h6" align="center">
          Fait avec amour par{" "}
          <MuiLink href="https://github.com/JulienUsson/">Julien Usson</MuiLink>
        </Typography>
      </Box>
      <AddFab aria-label="add" href={getIssuesLink()} target="_blank">
        <AddIcon />
      </AddFab>
    </Root>
  );
}
