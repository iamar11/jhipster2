import { TextField, Typography, Button } from '@mui/material';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { styled } from '@mui/material/styles';
import { createEntity } from 'app/entities/recette/recette.reducer';
import { useDispatch } from 'react-redux';
import { IUser } from 'app/shared/model/user.model';

// Interface décrivant la structure des données de la recette
interface RecipeData {
  title: string;
  description: string;
  user: IUser;
}

function RecipeForm(props) {
  const dispatch = useDispatch();

  // State pour stocker les valeurs du formulaire
  const [recipeData, setRecipeData] = useState<RecipeData>({
    title: '',
    description: '',
    user: { id: props.user },
  });

  // Gestionnaire de changement pour mettre à jour le state lorsque les champs du formulaire changent
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setRecipeData({ ...recipeData, [name]: value });
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
      <br />
      <TextField
        fullWidth
        margin="normal"
        name="title"
        value={recipeData.title}
        onChange={handleInputChange}
        placeholder="Un minimum de 5 caractères et un maximum de 150"
      />
      <br />
      <br />
      <Typography variant="h6" gutterBottom>
        Description de la recette:
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={3}
        maxRows={5}
        margin="normal"
        placeholder="Un minimum de 5 caractères et un maximum de 750"
        name="description"
        value={recipeData.description}
        onChange={handleInputChange}
      />
      <br />
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
    </form>
  );
}

export default RecipeForm;
