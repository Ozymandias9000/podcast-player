import * as React from "react"
import { Box, Text } from "react-native-design-utility"
import { theme } from "../../constants/theme"

const NoResults: React.FC<{ loading: boolean }> = ({ loading }) =>
  !loading ? (
    <Box f={1} center>
      <Text color={theme.color.grey}>No results </Text>
    </Box>
  ) : null

export default NoResults
