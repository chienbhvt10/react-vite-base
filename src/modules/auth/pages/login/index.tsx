import { yupResolver } from "@hookform/resolvers/yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "yup";

import ExitToAppIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { app_images_icon } from "../../../../assets/images";
import LinkTextCustom from "../../../../components/custom/LinkText";
import { PATH } from "@/constants/path";

interface LoginProps {}

interface LoginInput {
  username: string;
  password: string;
}

const loginValidationSchema = object<LoginInput>().shape({
  username: string().trim().required("This field is required").default(""),
  password: string().trim().required("This field is required").default(""),
});
const Login = (_: LoginProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
    defaultValues: loginValidationSchema.getDefault(),
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data, errors);
    navigate(PATH.HOME);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  /* "handleSubmit" will validate your inputs before invoking "onSubmit"  */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h4" align="center" sx={{ mb: 2 }}>
          Login
        </Typography>

        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <>
              <TextField label="Username" {...field} />
              <Typography variant="body2" color="error.main">
                {errors.username?.message && errors.username?.message}
              </Typography>
            </>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <>
              <TextField
                label="Password"
                {...field}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography variant="body2" color="error.main">
                {errors.password?.message && errors.password?.message}
              </Typography>
            </>
          )}
        />
        <Button type="submit" endIcon={<ExitToAppIcon />}>
          Login
        </Button>
        <Button
          type="button"
          onClick={() => navigate(PATH.HOME)}
          endIcon={<ExitToAppIcon />}
        >
          Guest
        </Button>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <LinkTextCustom linkText="Create a new account" />
          <LinkTextCustom linkText="Fotgot password" />
        </Stack>
        <Divider />
        <LinkTextCustom linkText="Use other account" align="center" />

        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Button
            type="button"
            variant="outlined"
            color="success"
            endIcon={
              <img
                alt="icon-google"
                src={app_images_icon.googleIcon}
                width={18}
                height={18}
              />
            }
          >
            Google
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="success"
            endIcon={
              <img
                alt="icon-facebook"
                src={app_images_icon.facebookIcon}
                width={18}
                height={18}
              />
            }
          >
            Facebook
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="success"
            endIcon={
              <img
                alt="icon-twitter"
                src={app_images_icon.twitterIcon}
                width={18}
                height={18}
              />
            }
          >
            Twitter
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default Login;
