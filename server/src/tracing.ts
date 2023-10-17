import { NodeTracerProvider } from "@opentelemetry/node";
import {
  BatchSpanProcessor,
  ConsoleSpanExporter,
} from "@opentelemetry/tracing";
import { SocketIoInstrumentation } from "@opentelemetry/instrumentation-socket.io";

const provider = new NodeTracerProvider();
const exporter = new ConsoleSpanExporter();

provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register();

const socketIoInstrumentation = new SocketIoInstrumentation();
socketIoInstrumentation.setTracerProvider(provider);
