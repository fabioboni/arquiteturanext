import { Text } from "@boni/design-system/components/Text";
import { sum } from "@boni/utils/math/sum";

export function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home</Text>
      <Text tag="p">
        Importando modulo local: @boni/utils/math/sum sum(2,2): {sum(2, 2)}
      </Text>
    </main>
  );
}
