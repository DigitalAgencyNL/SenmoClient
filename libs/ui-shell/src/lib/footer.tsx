import { Container, Flex, Text } from '@mantine/core';
import styles from './footer.module.css';

export function Footer() {
  return (
    <Container className={styles.footer}>
      <Flex gap='lg' align={'center'} justify={'space-between'} p='xs'>
        <Text size="sm" c="dimmed">
          SENMO © {new Date().getFullYear()} - All rights reserved.
        </Text>
        <Text size="xs" c="dimmed">
          Built with ❤️ by the Senmo Team
        </Text>
        <Text size="xs" c="dimmed">
          Privacy Policy | Terms of Service
        </Text>
        <Text size="xs" c="dimmed">
          Contact us at support@senmo.com
        </Text>
      </Flex>
    </Container>
  );
}

export default Footer;
