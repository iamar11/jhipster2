import { TextField, Typography, Button } from '@mui/material';
import dayjs from 'dayjs';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { styled } from '@mui/material/styles';
import { createEntity } from 'app/entities/recette/recette.reducer';
import { useDispatch } from 'react-redux';

// Interface décrivant la structure des données de la recette
interface RecipeData {
  title: string;
  description: string;
}

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#e57373"
//     },
//     secondary: {
//       main: "purple"},
//   },
// });

const dispatch = useDispatch();

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const RecipeForm: React.FC = () => {
  // State pour stocker les valeurs du formulaire
  const [recipeData, setRecipeData] = useState<RecipeData>({
    title: '',
    description: '',
  });

  // Gestionnaire de changement pour mettre à jour le state lorsque les champs du formulaire changent
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setRecipeData({ ...recipeData, [name]: value });
    console.log('salut', name, value);
  };

  // Gestionnaire de soumission pour traiter le formulaire lorsque l'utilisateur le soumet
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Ici, vous pouvez ajouter la logique pour traiter les données du formulaire

    // Appelez votre action createEntity avec les données du formulaire
    dispatch<any>(createEntity(recipeData));
    console.log('Données de la recette soumises :', recipeData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Titre de la recette:
      </Typography>
      <TextField fullWidth margin="normal" name="title" value={recipeData.title} onChange={handleInputChange} />
      <br />
      <Typography variant="h6" gutterBottom>
        Description de la recette:
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={3}
        maxRows={4}
        margin="normal"
        name="description"
        value={recipeData.description}
        onChange={handleInputChange}
      />
      <br />
      <Button
        type="submit"
        variant="contained"
        style={{
          backgroundColor: '#e57373',
        }}
      >
        Poster la recette
      </Button>
      {/* Ajoutez un label pour l'input file et un VisuallyHiddenInput si nécessaire */}
    </form>
  );
};

export default RecipeForm;
